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
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigate;

// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// function Nav() {

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/penpals">
//               Penpals
//             </Link>
//           </li>
//           <li className="mx-1">
//             {}
//             <a href="/" onClick={() => Auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/signup">
//               Signup
//             </Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">
//               Login
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <h1>
//         <Link to="/playlists">
//          Playlists
//         </Link>
//       </h1>

//       <nav>
//         {showNavigation()}
//       </nav>
//     </header>
//   );
// }

// export default Nav;
