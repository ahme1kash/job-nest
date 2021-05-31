const mongoose = require('mongoose')
// CurrentLocation: "",LinkedInProfile: "",Profession: "",YearofExperience: "",ProvideyourBio:""
const candidateProfileSchema = new mongoose.Schema({
    CurrentLocation:{
        type:String,
        required:true
    },
    LinkedInProfile:{
        type:String,
        required:true,
       
    },
    Profession: {
        type:String,
        required:true
    },
    YearofExperience:{
        type:String,
        required:true
    },
    ProvideyourBio:{
        type:String,
        required:true
    }

 

})

//Creating Collection
const CandidateProfile  = mongoose.model('candidateprofiles',candidateProfileSchema)
module.exports = CandidateProfile
