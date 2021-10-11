const express =require('express');
var router =express.Router();
var { ams} = require('../models/model')

var {ams_2} =require('../models/model')

router.get('/',(req,res)=>{
    ams_2.find((err ,docs)=>{
        if(!err){
            res.send(docs);
        }else{
console.log('its error');
        }
    })
});

router.post('/',(req,res) =>{
    console.log(req.body);
    var att =new ams({
        status: req.body.status,
        Date:req.body.Date
    });
    att.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
    })
})

//post method

router.post('/send',(req,res) =>{
    console.log(req.body);
    var att =new ams_2({
        statuss: req.body.statuss,
        Date:new Date(),
        month: ( new Date().getMonth())+1
    });
    att.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
    })
})


//patch method

router.patch("/update/:id", async (req, res) => {
	try {
		const post = await ams_2.findByIdAndUpdate( req.params.id,req.body ,{
            new:true
        });
		res.send(post)
	} catch (e){
		res.status(404).send(e);
		console.log(e);
	}
})

//put method with 

router.put("/upadtes" ,async(req,res)=>{
    
    let statuss =req.body.statuss;
    var att =new ams_2({
        statuss: req.body.statuss,
        Date:req.body.Date,
    });

    ams_2.findOne({statuss:statuss},(err, docs)=>{
       
            if(docs){
                res.send("existing");
            }else{
                att.save((err,doc)=>{
                    if(!err){
                        res.send(doc);
                    }
                })
    // res.send("insert");
            }
        })
    });




//get method

router.get('/gets',(req,res)=>{
ams_2.find({Date:1},(err,docs)=>{
    if(!err){
        res.send(docs);
    }else{
console.log('its error');
    }
})
});







module.exports =router;