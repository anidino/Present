import React from "react";



function Nav() {
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="music"> ♫</span>Present
        </a>
        </h2>
        <nav class="navbar navbar-dark bg-dark">
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#profile">My Dashboard</a>
            </li>
            <li className="mx-2">
              <a href="#login">My Profile</a>
            </li>
            <li className="mx-2">
              <a href="#donate">Donate</a>
            </li>
            <li className="mx-2">
              <a href="#login">Log Out</a>
            </li>
          </ul>
        </nav>
   


    </header>
  );

}

export default Nav;



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