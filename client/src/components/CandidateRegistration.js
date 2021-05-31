import React,{useState} from 'react'
import regImage from "../Image/signup1.png"
import {Link,useHistory} from "react-router-dom"
const CandidateRegistration = () => {
   const history = useHistory()
    const [candidateRegistration,setCandidateRegistraion] = useState({
        name: "",email: "",contactnumber: "",work: "",password: "",cpassword:""
    })

    let name,value
    const handleInputs=(e)=>{
         console.log(e)
         name = e.target.name
         value = e.target.value
         setCandidateRegistraion({...candidateRegistration, [name]:value})
     }

     const PostData = async(e) =>{
         e.preventDefault()
         const{name, email, contactnumber, work, password, cpassword}= candidateRegistration
       
        let res = await fetch("/registercandidate",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify({
             name, email, contactnumber, work, password, cpassword
            })
        })
        const data = await res.json()
       
     if(res.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }
        else{
           
            window.alert("Registration Successful")
            console.log("Registration Successful")
            history.push('/candidatesignin')
        }
    
     }

    return (
    <>
    <h2 style ={{marginLeft:'520px',marginTop:'50px'}}>Candidate Credentials</h2>
    
    <div class="sign-up-form" style={{marginTop:"20px",height:"670px",width:"500px" }}>
    <img src={regImage} style={{marginLeft:'0px',marginTop:'50px'}} alt="signuppic"/>
    <form method="POST" autoComplete="off"
         
         >
<input type = "name" class="input-box" placeholder="Your Name"
 name ="name" id="name" autoComplete="off" 
value={candidateRegistration.name}
 onChange={handleInputs} 
/>
<input type = "email" class="input-box" placeholder="Your Email"
 name ="email" id="email" autoComplete="off" 
value={candidateRegistration.email}
 onChange={handleInputs} 
/>
<input type = "password" class="input-box" placeholder="Your Password"
 name ="password" id="password" autoComplete="off" 
value={candidateRegistration.password}
onChange={handleInputs} 
/>
<input type = "password" class="input-box" placeholder="Input Password again"
 name ="cpassword" id="cpassword" autoComplete="off" 
value={candidateRegistration.cpassword}
onChange={handleInputs} 
/>
<input type = "work" class="input-box" placeholder="Your Work"
 name ="work" id="work" autoComplete="off" 
value={candidateRegistration.work}
 onChange={handleInputs} 
/>
<input type = "contactnumber" class="input-box" placeholder="Your Contact Number"
 name ="contactnumber" id="contactnumber" autoComplete="off" 
value={candidateRegistration.contactnumber}
 onChange={handleInputs} 
/>

<p>
<span>
 <input type="checkbox"/>
</span> 
I agree to the terms of services
</p>
<button onClick={PostData} style={{backgroundColor:"blue"}} type = "button" class="signup-btn">Sign Up </button>
<div style={{color:"black"}}>
    Already having Account? Click here to <Link style={{color:"blue"}}to='/candidatesignin'>Signin</Link>
</div>
</form>

</div>
 </>
    )
}

export default CandidateRegistration




 
