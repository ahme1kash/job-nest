const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({

   
    postedon:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true

    },
    companyname:{
        type:String,
        required:true
    },
    companyurl:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
        required:true
    },
    link:{
        type:String,
        required:true
    }


  

})
const Job = mongoose.model('jobs',jobSchema)
 module.exports = Job