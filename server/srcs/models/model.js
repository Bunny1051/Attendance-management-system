const mongoose = require('mongoose');

var ams = mongoose.model('ams',{
    status :{type:String},
    id :{type :Number}
   
    
});

var ams_2 = mongoose.model('ams_2',{
   
    Date:{type:Date},
    statuss:{  type: String },
   
});



module.exports ={ams, ams_2}
