import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import theme from "../theme/theme"
import JobHeader from "./JobHeader/Index"
import JobFilter from "./JobFilter/Index"
import JobCard from "./Jobs/JobCard"
import JobModal from "./Jobs/JobModal"
import dummyData from '../dummyData'
import {Box, Grid,ThemeProvider} from "@material-ui/core"

const Jobs = () => {
    const history = useHistory()
    const[jobData,setJobData]= useState({})
    const callJobsPage = async()=>{
        try{
            //fetching the data from 
           let res = await fetch('/recruiterjobs',{
               method:"GET",
               headers:{
                   Accept:"application/json",
                   "Content-Type":"application/json"
               },
               credentials:"include"
           })
           const data = await res.json()
           console.log(data)
           if(res.status!== 200){
               throw new Error(res.error)
           }
        }
        catch(err){
            console.log(err)
            history.push('/')
        }
    }
    useEffect(()=>{
       callJobsPage()
    },[])
    return (
        <div>
            <ThemeProvider theme={theme}>
               <JobHeader/>
               <JobModal/>
               <Grid container justify="content">
                   <Grid item xs={10}>
                   <JobFilter/>
                   {dummyData.map(job =>
                   <JobCard key={job.id}{...job}/>
                   )}
                   </Grid>
               </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Jobs
