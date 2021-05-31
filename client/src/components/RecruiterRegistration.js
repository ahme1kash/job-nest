import React,{useState} from 'react'
import regImage from "../Image/signup1.png"
import {Link,useHistory} from "react-router-dom"
const RecruiterRegistration = () => {
    const history=useHistory()
    // const[name,setName]=useState("")
    // const[email,setEmail]=useState("")
    // const[password,setPassword]=useState("")
    const [recruiterRegistration,setRecruiterRegistraion] = useState({
        name:"",email:"",password:""
    })
    let name,value
    const handleInputs=(e)=>{
        console.log(e)
        name = e.target.name
        value = e.target.value
        setRecruiterRegistraion({...recruiterRegistration, [name]:value})
    }
const PostData=async(e) =>{
    e.preventDefault()
    const{name, email, password}= recruiterRegistration
    // console.log(Object.keys(recruiterRegistration).length)
    // if (Object.keys(recruiterRegistration).length <3){
    //    window.alert("Please give input to all fields")
    //    window.reload()
    // }
    
   let res = await fetch("/registerrecruiter",{
       method:"POST",
       headers:{
           "Content-Type":"application/json"

       },
       body:JSON.stringify({
        name, email, password
       })
   })
   const data = await res.json()
   
   if (res.status === 422 || !data){
   
       window.alert("Invalid Registration")
       console.log("Invalid Registration")
   }
  
  
   else{
   
       window.alert("Registration Successful")
       console.log("Registration Successful")
       history.push('/recruitersignin')
   }
}


    return (
        <>
 <h2 style ={{marginLeft:'530px'}}><br></br>Recruiter Credentials</h2>
        <div class="sign-up-form" style={{marginTop:"50px",height:"430px" }}>
    <img src={regImage} style={{marginLeft:'0px',marginTop:'50px'}} alt="signuppic"/>
    <form method="POST" autoComplete="off"
       
         >
<input type = "name" class="input-box" placeholder="Your Name"
 name ="name" id="name" autoComplete="off" 
value={recruiterRegistration.name}
 onChange={handleInputs} 
/>
<input type = "email" class="input-box" placeholder="Your Email"
 name ="email" id="email" autoComplete="off" 
value={recruiterRegistration.email}
 onChange={handleInputs} 
/>
<input type = "password" class="input-box" placeholder="Your Password"
 name ="password" id="password" autoComplete="off" 
value={recruiterRegistration.password}
onChange={handleInputs} 
/>
<button onClick={PostData} style={{backgroundColor:"blue"}}type = "button" class="signup-btn">Sign Up </button>
<div style={{color:"black"}}>
    Already having Account? Click here to <Link style={{color:"blue"}}to='/recruitersignin'>Signup</Link>
</div>
</form>
</div>
 </>
        
    )
}

export default RecruiterRegistration
