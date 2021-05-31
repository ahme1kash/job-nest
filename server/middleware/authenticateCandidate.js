const jwt = require("jsonwebtoken")
const Candidate = require("../model/candidateSchema")
const Authenticate = async(req,res,next)=>{
    try{
     const token = req.cookies.jw2token
    //  console.log(token)
     const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
     const rootCandidate= await Candidate.findOne({_id : verifyToken._id,"tokens.token":token})
     if(!rootCandidate){
         throw new Error('Candidate Not Found')
     }
     else{
     req.token=token
     req.rootCandidate = rootCandidate
     req.rootCandidateID = rootCandidate._id
     next()
    }
}
    catch(err){
        res.status(401).send()
         console.log(err)
    }

}
module.exports= Authenticate
