import React,{useState} from 'react'
import regImage from "../Image/signup1.png"
import {Link,useHistory} from "react-router-dom"
const RecruiterLogin = () => {
    const history = useHistory()
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")


const loginRecruiter = async(e)=>{

    e.preventDefault()
    let res = await fetch("/loginrecruiter",{
     method:"POST",
     headers:{
         "Content-Type":"application/json"

     },
     body:JSON.stringify({
      name,
      email,
      password
     })
 })
 const data = await res.json()
 if(res.status===422 || !data){
     window.alert("Invalid Credentials")
 }
 else{
     window.alert("Login Successful")
     history.push('/recruiterjobs')
 }
}


    return (
        <>
        <h2 style ={{marginLeft:'570px', paddingTop: '3rem'}}>Recruiter Login</h2>
    <div class="sign-up-form" style={{marginTop:"50px",height:"430px" }}>
<img src={regImage} style={{marginLeft:'0px',marginTop:'50px'}} alt="signuppic"/>
<form method="POST" autoComplete="off">
<input type = "name" class="input-box" placeholder="Your Name"
name ="name" id="name" autoComplete="off" 
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<input type = "email" class="input-box" placeholder="Your Email"
name ="email" id="email" autoComplete="off" 
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<input type = "password" class="input-box" placeholder="Your Password"
name ="password" id="password" autoComplete="off" 
value={password}
onChange={(e)=>setPassword(e.target.value)} 
/>
<button onClick={loginRecruiter} style={{backgroundColor:"blue"}}type = "button" class="signup-btn">Sign In </button>
<div style={{color:"black"}}>
Not having Account? Click here to <Link style={{color:"blue"}}to='/recruitersignup'>Signup</Link>
</div>
</form>
</div>
  
</>          
     
    )
}

export default RecruiterLogin


