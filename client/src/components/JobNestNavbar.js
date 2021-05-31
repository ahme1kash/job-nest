import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap"

const JobNestNavbar = () => {
    return (
    	<Navbar bg="dark" variant="dark" expand='lg' sticky='top'>
        <Navbar.Brand style={{fontWeight:"bold"}}>JOBNEST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
            <LinkContainer style={{fontWeight:"bold"}}to="/">
                <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{fontWeight:"bold"}}to="/candidatesignin">
                <Nav.Link>APPLY</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{fontWeight:"bold"}}to="/recruitersignin">
                <Nav.Link>RECRUIT</Nav.Link>
            </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
            <LinkContainer style={{fontWeight:"bold"}} to="/about">
                <Nav.Link>ABOUT</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{fontWeight:"bold"}} to="/contacts">
                <Nav.Link>CONTACT US</Nav.Link>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
export default JobNestNavbar



























// <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#ccebff'}}>
// <NavLink className="navbar-brand" style={{color:'black',fontWeight:'bold',marginLeft:'30px'}}to="/">JobNext</NavLink>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarSupportedContent">
//   <ul className="navbar-nav ml-auto" >
//     <li className="nav-item active">
//       <NavLink className="nav-link"style={{fontSize:'21px',color:'red',marginRight:'35px'}} to="/">Home <span className="sr-only">(current)</span></NavLink>
//     </li>
    

//     <li className="nav-item"style={{fontSize:'21px',marginRight:'35px'}}>
//       <NavLink className="nav-link "style={{color:'red'}}  to="/about">About</NavLink>
//     </li>
//     <li className="nav-item" style={{fontSize:'21px',marginRight:'35px'}}>
//       <NavLink className="nav-link"style={{color:'red'}} to="/contact">Contact</NavLink>
//     </li>
//     <li className="nav-item" style={{fontSize:'21px',marginRight:'35px'}}>
//       <NavLink className="nav-link"style={{color:'red'}} to="/jobs">Jobs</NavLink>
//     </li>
   
    
//   </ul>
//   {/* <form className="form-inline my-2 my-lg-0">
//     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form> */}
// </div>
// </nav>
// </>
