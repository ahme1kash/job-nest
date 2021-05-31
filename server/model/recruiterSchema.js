const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const recruiterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
  
   


})
//mongoose.model(modelName,schema)
// const Recruiter = mongoose.model('recruiters',recruiterSchema)
// module.exports = Recruiter
recruiterSchema.pre('save',async function(next){
    if (this.isModified('password')){
              this.password = await bcrypt.hash(this.password,12)
    }
    next()
 })


 recruiterSchema.methods.generateAuthToken = async function(){
    try{
    let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({token:token})
    await this.save()
    return token
    }
    catch(err){
     console.log(err)
    }
}

const Recruiter = mongoose.model('recruiters',recruiterSchema)
module.exports = Recruiter