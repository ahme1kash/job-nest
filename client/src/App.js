// import {React, createContext, useState} from 'react';
 import React from 'react';
import Home from './components/Home';
import JobNestNavbar from "./components/JobNestNavbar";
import About from "./components/About";
import CandidateJobs from "./components/CandidateJobs";
import RecruiterJobs from "./components/RecruiterJobs";
import {Switch,Route} from 'react-router-dom';
import RecruiterRegistration from './components/RecruiterRegistration';
import CandidateRegistration from './components/CandidateRegistration';
import CandidateLogin from './components/CandidateLogin';
import RecruiterLogin from './components/RecruiterLogin';
import CandidateProfile from './components/CandidateProfile';
// export const AuthContext = createContext()

const App=()=> {
  // const [candidateId, setCandidateId] = useState('')
  return (
  //   <AuthContext.Provider value = {{candidateId, setCandidateId}}>
      <>
      <JobNestNavbar/>
    
        <Switch>
          
          <Route  exact path='/' component={Home}/>
          <Route  path='/candidatesignup' component={CandidateRegistration}/>
          <Route  path='/recruitersignup' component={RecruiterRegistration}/>
          <Route  path='/candidatesignin' component={CandidateLogin}/>
          <Route  path='/recruitersignin' component={RecruiterLogin}/>
          <Route  path='/candidatejobs' component={CandidateJobs}/>
          <Route  path='/recruiterjobs' component={RecruiterJobs}/>
          <Route  path='/candidateprofile' component={CandidateProfile}/>
          <Route  path='/about' component={About}/>
        </Switch>
         
      
    </>
      
  );
}

export default App;
