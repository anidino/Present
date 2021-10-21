import React from "react";

function Nav() {
  return (
    <section>
      <h1 id="Nav"> Nav bar here</h1>
      <ul className="flex-row">

        <li className="mx-1">
          Profile</li>
        <li>Donate</li>
        <li>My memories</li>
        <li className="mx-1">Penpals
          </li>
      </ul>
    </section>
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