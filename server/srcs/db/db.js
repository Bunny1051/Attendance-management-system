const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/ams' ,(err) =>{
    useFindAndModify: false
    if(!err)
    console.log("mongodb is coneected");
    else
    console.log('errorin db :' +JSON.stringify(err,undefined,2));

});

module.exports =mongoose;