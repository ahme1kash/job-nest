import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
// import jumbotronimage from '../assets/jumbotron.jpg';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap"

import {Link} from "react-router-dom"
import "../App.css"
import jumbotron from "../Image/jumbotron.jpg"
const JobNestJumbotron  = () => {
    return (<>
     <Jumbotron fluid style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(${jumbotron})`, backgroundSize: 'cover'}}>
            <h1 className='text-center display-1 mt-4 mb-4 pt-4 pb-4'><b>JobNest</b></h1>
            <h1 className='text-center display-4 mt-3'><b>Find your dream job</b></h1>
            <p className='text-center h4 mt-4 mb-4 pt-4 pb-4'>
                JobNest helps people find exciting job opportunities, from<br></br> fast-growing companies you know and love.
            </p>
            <p className='text-center mt-4 pt-4'>
            <LinkContainer to="/candidatesignin">
                <Button variant="primary" size="lg" active><b>Find a Job</b></Button>
            </LinkContainer>
            </p>
            <p className='text-center'>
                Looking to hire? <Link to='/recruitersignin'>Post Jobs</Link>
            </p>

        </Jumbotron>
        </>
    )
}

export default JobNestJumbotron;
