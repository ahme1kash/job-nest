const dotenv =  require('dotenv')
const express = require('express')
dotenv.config({path:'./config.env'})
const app = express()
const PORT = process.env.PORT
const hostname = `http://127.0.0.1:${PORT}`
require('./DB/conn')

//const User = require('./model/userSchema')

// Converting the json data into  object. required when post request is made
app.use(express.json())
//Link the router files to make route easy
app.use(require('./router/auth'))
// app.use(require('./router/auth2'))




//Middleware
// const middleware=(req,res,next)=>{
//     console.log('Hello my Middleware')
//     next()
// }


app.get('/',(req,res)=>{
        res.send('Hello world from the server')
})
// app.get('/jobs',middleware,(req,res)=>{
//     console.log('I am executed after hello my  middleware')
//     res.send("Hello About You Section")

// })




app.get('/logincandidate',(req,res)=>{
    res.send("Welcome to login")

})
app.get('/jobs',(req,res)=>{
    res.send("Welcome to jobs Page")

})

app.get('/loginrecruiter',(req,res)=>{
    res.send("Welcome to login")

})
app.get('/registercandidate',(req,res)=>{
    res.send("Register yourself to Awesomeness")

})

app.get('/registerrecruiter',(req,res)=>{
    res.send("Register yourself to Awesomeness")

})

app.listen(PORT,()=>{
    console.log(`server is running at ${hostname}`)

})