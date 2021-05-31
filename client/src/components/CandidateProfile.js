import React,{useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
// import {AuthContext} from "../App"

const CandidateProfile = () => {
//    const {candidateId, setCandidateId} = useContext(AuthContext)
//    const CandidateId = candidateId
   const history = useHistory()
    const [candidateProfile,setCandidateProfile] = useState({
        // CandidateId: CandidateId,
        CurrentLocation:"",LinkedInProfile:"",Profession:"Software Engineer",YearofExperience:"1 Year",ProvideyourBio:""
    })

    let name,value
    const handleInputs=(e)=>{
         console.log(e)
         name = e.target.name
         value = e.target.value
         setCandidateProfile({...candidateProfile, [name]:value})
     }

     const PostData = async(e) =>{
         
         e.preventDefault()
         const{CurrentLocation,LinkedInProfile,Profession,YearofExperience,ProvideyourBio}= candidateProfile
        let res = await fetch("/candidateprofile",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify({
                CurrentLocation,LinkedInProfile,Profession,YearofExperience,ProvideyourBio
            })
        })
        const data = await res.json()
        console.log(res.body)
       
     if(res.status === 422 || !data) {
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        
        }
        else{
           
            window.alert("Candidate Profile Registered Successfully")
            console.log("Registration Successful")
            history.push('/candidatejobs')
        }
    
     }

    return (
    <>
    <h2 style ={{marginLeft:'595px',marginTop:'50px'}}>Candidate Profile</h2>
    
    <div class="sign-up-form" style={{marginTop:"20px",height:"890px",width:"900px",marginBottom:"4em" }}>
    

    <form method="POST" action="" autoComplete="off">
            <div>
                <label htmlFor="CurrentLocation">Current Location</label> 
                </div>
                <div>
                <input type="text" name ="CurrentLocation"size="50"  id="CurrentLocation" 
                value={candidateProfile.CurrentLocation}  autoComplete="off"
                onChange={handleInputs} />
            </div>
           <br></br>
           <br></br>


           <div>
                <label  htmlFor="Select your Role"> Select your Role</label> 
           </div>
               
            <div>
               <select value={candidateProfile.Profession} onChange={handleInputs} style={{height:"3em",width:"15em"}} name="Profession" id="Profession" >
               <optgroup label="Profession">
               <option value ="Software Engineer">Software Engineer</option>
               <option value ="Mobile Developer">Mobile Developer </option>
               <option value ="Android Developer">Android Developer </option>
               <option value ="Frontend Developer">Frontend Developer </option>
               <option value ="Backend Developer">Backend Developer </option>
               <option value ="Full Stack Developer">Full Stack Developer </option>
               <option value ="Data Scientist">Data Scientist </option>
               <option value ="Machine Learning Engineer">Machine Learning Engineer </option>
               </optgroup>

               <optgroup label="Product Manager">
               <option value ="Product Manager">Product Manager</option>
               </optgroup>

              </select>
            </div>
           <br></br>
           <br></br>



           <div>
                <label htmlFor="Select your Experience"> Select your Experience</label> 
                </div>
                
                <div>
               <select value={candidateProfile.YearofExperience} onChange={handleInputs} style={{height:"3em",width:"15em"}} name="YearofExperience" id="YearofExperience" >
               <optgroup label="YearofExperience">

                <option value ="&lt; 1 Year">&lt; 1 Year</option>
                <option value ="1 Year">1 Year</option>
                <option value ="2 Years">2 Years</option>
                <option value ="3 Years">3 Years</option>
                <option value ="4 Years">4 Years</option>
                <option value ="5 Years">5 Years</option>
                <option value ="6 Years">6 Years</option>
                <option value ="7 Years">7 Years</option>
                <option value ="8 Years">8 Years</option>
                <option value ="9 Years">9 Years</option>
                <option value ="10+ Years">10+ Years</option>
               </optgroup>

              </select>
            </div>
            <br></br>
            <br></br>


                  <label htmlFor="Bio"> Provide your Bio</label> 
                
                <div>
                <input type="text" name ="ProvideyourBio"size="100" style={{height:"10em"}} 
                id="ProvideyourBio" value={candidateProfile.ProvideyourBio} 
                 autoComplete="off"
           
                onChange={handleInputs} />
            </div>
           <br></br>
           <br></br>
           <div>
                <label htmlFor="Give LinkedIn Profile Link"> LinkedIn Profile </label> 
                </div>
                <div>
                <input type="text" name ="LinkedInProfile"size="50"  id="LinkedInProfile"
                 value={candidateProfile.LinkedInProfile}  autoComplete="off"
                onChange={handleInputs} />
            </div>
           <br></br>
           <br></br>
 
           
        
<p>
<span>
 <input type="checkbox"/>
</span> 
I agree to the terms of services
</p>
<br></br>
<br></br>
<button onClick={PostData} style={{backgroundColor:"blue",width:"16em"}} type = "button" class="signup-btn">Register Your Bio </button>
</form>

</div>
 </>
    )
}

export default CandidateProfile




 
