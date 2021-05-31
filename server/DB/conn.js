const mongoose = require('mongoose')
const DB = process.env.ConnectionString
mongoose.connect(DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
     console.log('connection successful')

}).catch((error)=>console.log('connection unsuccessful'))