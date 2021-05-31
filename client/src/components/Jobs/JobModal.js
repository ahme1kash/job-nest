import React from 'react'
import {Close as MUIClose} from '@material-ui/icons'

import {Box,
    Grid,
    FilledInput,
    Button,
    Select,
    Typography,
    MenuItem,
    Dialog,
    makeStyles,
    DialogTitle,
    DialogActions,
    IconButton,
    DialogContent
}
    
from '@material-ui/core';


const useStyles = makeStyles((theme) =>({
    skillChip:{
        margin:theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight:600,
        border:`1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover":{
            backgroundColor: theme.palette.secondary.main,
            color:"#fff"
        }
    }

}))

 const skills=[
     "React",
     "Node",
     "CSS3",
     "Python",
     "Java",
     "Angular",
     "MongoDB",
     "JavaScript"
 ]
const JobModal = () => {
    const classes = useStyles()
    return (
        <>
        <Dialog open={false} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job Here
                <IconButton>
                    <MUIClose/>
                </IconButton>
                </Box>
                </DialogTitle>
            <DialogContent>
           <Grid container spacing={2}>
               <Grid item xs={6}>
                   <FilledInput placeholder="Job title *"disableUnderline fullWidth/>
               </Grid>
               <Grid item xs={6}>
               <Select disableUnderline variant="filled" defaultValue="Full time *"  fullWidth>
                
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract based">Contract based</MenuItem>
            </Select>
               </Grid>
               <Grid item xs={6}>
                   <FilledInput placeholder="Company Name*" disableUnderline fullWidth/>
               </Grid>
               <Grid item xs={6}>
                   <FilledInput placeholder="Company URL*" disableUnderline fullWidth/>
               </Grid>
               <Grid item xs={6}>
               <Select disableUnderline variant="filled" fullWidth  defaultValue="Remote" >
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="In-Office">In-Office</MenuItem>
                </Select>
               </Grid>
               <Grid item xs={6}>
                   <FilledInput placeholder="Job Link*" disableUnderline fullWidth/>
               </Grid>
               <Grid item xs={12}>
                   <FilledInput 
                   placeholder="Job Description*" 
                   disableUnderline 
                   fullWidth
                   multiline
                   rows={4}
                   />
               </Grid>
           </Grid>
            <Box mt={2}>
                <Typography> Skills</Typography>
                <Box display="flex">
                    {skills.map(skill => <Box className={classes.skillChip} key ={skill}>{skill}</Box>)}
                </Box>

            </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" width="100%" display="flex" justifyContent="space-between">
             <Typography variant="caption">*Required fields</Typography>
             <Button variant="contained" color="primary"  disableElevation>Post a Job</Button>
                    </Box>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default JobModal
