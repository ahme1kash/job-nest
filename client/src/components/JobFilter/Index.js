import React from 'react'
import {Box,Button,Select,MenuItem,makeStyles} from '@material-ui/core'


const Index = () => {
    const useStyles = makeStyles({
        wrapper:{
           backgroundColor:"fff",
           display:"flex",
           boxShadow:"0px 1px 5px rgba(0,0,0,0.1)",
           borderRadius: "5px",
           "&> *":{
               flex:1,
               margin:"8px",
               height:"48px",
               

           },
        },
      })
      const classes=useStyles()
    return (
       
        <div>
           <div style={{marginTop:"-2.5em",backgroundColor:"#ffffff" ,height:"80px",marginLeft:"10em",borderRadius:"5px",width:"63em"}}>
            <box>
                <div className={classes.wrapper}style={{justifyContent:"space-evenly",marginLeft:"5px"}} padding={6} >
                <Select disableUnderline  defaultValue="Full time" >
                
                    <MenuItem value="Full time">Full time</MenuItem>
                    <MenuItem value="Part time">Part time</MenuItem>
                    <MenuItem value="Contract based">Contract based</MenuItem>
                </Select>
                
                
                <Select disableUnderline  defaultValue="Remote" >
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="In-Office">In-Office</MenuItem>
                </Select>
                <Button variant="contained" color="primary"  disableElevation>Filter</Button>
                </div>
                </box>
                </div>
        </div>
    )
}

export default Index
