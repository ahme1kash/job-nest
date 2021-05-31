const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const candidateSchema = new mongoose.Schema({
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
    contactnumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },

  cpassword:{
    type:String,
    required:
    true
  },
  tokens:[{
      token:{
          type:String,
          required:true
      }
  }]



})
//mongoose.model(modelName,schema)
// const Candidate =  mongoose.model('collectionName','schemaName')
// This Candidate variable is exported and used in the auth.js file
// Giving the collection name in lowercase and plural because anyhow it turns into plural
// and lowercase when the data is stored 
// const Candidate = mongoose.model('candidates',candidateSchema)
// module.exports = Candidate
candidateSchema.pre('save',async function(next){
   if (this.isModified('password')){
             this.password = await bcrypt.hash(this.password,12)
             this.cpassword = await bcrypt.hash(this.cpassword,12)
   }
   next()
})

//Generating the token
candidateSchema.methods.generateAuthToken = async function(){
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

//Creating Collection
const Candidate = mongoose.model('candidates',candidateSchema)
module.exports = Candidate
