import React from 'react'
import { Box, Button, Grid, Typography, makeStyles } from '@material-ui/core'
// const skills = ["JavaScript", "Reactjs", "Nodejs"]
const userStyles = makeStyles((theme) => ({

    wrapper: {
        border: '1px solid #758283',
        cursor:"pointer",
        transition:"0.3s",
        "&:hover":{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
            borderLeft:"6px solid #4D64E4"
            
        }

    },
    companyName: {
        fontSize: "13.5px",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: 'inline-block',
        fontWeight: 600,

    },
    skillChip:{
        margin:theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight:600,
        backgroundColor:theme.palette.secondary.main,
        color:'#fff'
    }

}))
const JobCard = (props) => {
    const classes = userStyles()
    return (
        <>
            <div style={{ marginLeft: "11.5em", width: "60em",backgroundColor: "#F5F5F5" }}>
                <Box p={1} className={classes.wrapper}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <div >
                                <Typography variant="subtitle1">
                                    {props.title}
                                </Typography>
                                <Typography className = {classes.companyName}variant="subtitle1">{props.CompanyName}</Typography>
                            </div>
                        </Grid>
                        <div >
                        <Grid item container xs>
                            {props.skills.map((skill) => (
                                <Grid className={classes.skillChip} key={skill} item>
                                   {skill}
                                </Grid>
                            ))}

                        </Grid>
                        </div>
                        <Grid item container direction="column" alignItems="flex-end" xs>
                            <Grid item>
                                <Typography variant="caption">
                                    {`${props.postedOn}`} | {props.type}|{props.location}
                   </Typography>
                            </Grid>
                            <Grid item>
                                <Box mt={1} >
                                    <div style={{display:"flex"}}>
                                    <Button m={8}variant="outlined">Delete </Button>
                                    &nbsp;
                                    &nbsp;
                                     <Button variant="outlined">Check</Button>

                                     </div>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            </div>
        </>

    )
}

export default JobCard
