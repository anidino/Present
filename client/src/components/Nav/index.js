import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigate() {
  return (
    <Navbar id="nav" variant="light">
      <Container>
        <Navbar.Brand href="#present">
          {" "}
          <span role="img" aria-label="music">
            {" "}
            ♫
          </span>
          Present
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#playlists">Playlists</Nav.Link>
          <Nav.Link href="#donate">Donate</Nav.Link>
          <Nav.Link href="#profile">My Profile</Nav.Link>
          {/* <Nav.Link href="login">Log In</Nav.Link> */}
          {/* <Nav.Link href="signup">Sign Up</Nav.Link> */}
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}


export default Navigate;






// import React, { Component } from 'react';
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
// MDBHamburgerToggler } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

// class NavbarPage extends Component {
// state = {
//   collapse1: false,
//   collapseID: ''
// }

// toggleCollapse = collapseID => () => {
//   this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
// }

// toggleSingleCollapse = collapseId => {
//   this.setState({
//     ...this.state,
//     [collapseId]: !this.state[collapseId]
//   });
// }

// render() {
//   return (
//     <Router>
//       <MDBContainer>
//         <MDBNavbar color="amber lighten-4" style={{ marginTop: '20px' }} light>
//           <MDBContainer>
//             <MDBNavbarBrand>
//               MDBNavbar
//             </MDBNavbarBrand>
//             <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
//               <MDBCollapse isOpen={this.state.collapse1} navbar>
//                 <MDBNavbarNav left>
//                   <MDBNavItem active>
//                     <MDBNavLink to="#!">Home</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#!">Link</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#!">Profile</MDBNavLink>
//                   </MDBNavItem>
//                 </MDBNavbarNav>
//               </MDBCollapse>
//           </MDBContainer>
//         </MDBNavbar>
//       </MDBContainer>
//     </Router>
//     );
//   }
// }

// export default NavbarPage;