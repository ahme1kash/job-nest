const jwt = require("jsonwebtoken")
// const Recruiter = require("../model/recruiterSchema")
const Recruiter = require("../model/recruiterSchema")
const Authenticate = async(req,res,next)=>{
    try{
     const token = req.cookies.jwtoken
    //  console.log(token)
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
    const rootRecruiter= await Recruiter.findOne({_id : verifyToken._id,"tokens.token":token})
     
     if(!rootRecruiter){
         throw new Error('Recruiter Not Found')
     }
     else{
     req.token=token
     req.rootRecruiter = rootRecruiter
     req.rootRecruiterID = rootRecruiter._id
     next()
    }
}
    catch(err){
        res.status(401).send('Unauthorized:No Token Provided')
        console.log(err)
   }
    

}
module.exports= Authenticate
