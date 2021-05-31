import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const Jobs = () => {
    const history = useHistory()
    const callJobsPage = async()=>{
        try{
            //fetching the data from 
           let res = await fetch('/candidatejobs',{
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
    }, [])
    return (
        <div>
            <p>Hii You can apply for jobs here </p>
        </div>
    )
}

export default Jobs
