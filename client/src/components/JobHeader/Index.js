import React from 'react'
import {Box,Grid,Typography,Button} from '@material-ui/core'


const index = () => {
    return (
        <div>
          <Box py={7} bgcolor="secondary.main"  color="white">
              <Grid container justify="center">

              <Grid item x6={10}>
         <Box display="flex" justifyContent="space-between" >
    <div style={{marginRight:"24.5em"}}>
    <Typography   variant ="h5">Job Listings</Typography>
    
    </div>
    <div style={{marginLeft:"24.5em"}}>
    <Button variant="contained" color="primary"  disableElevation> Post a Job</Button>
    </div>
    </Box>
    </Grid>
    </Grid>
     </Box>
        </div>
    )
}

export default index

