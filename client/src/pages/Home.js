import React from "react";
import Profile from "../components/Profile";
import Quote from "../components/Quote";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import Donate from "../components/Donate";
import Logout from "../components/Logout";
// import Login from "../components/Login";
import Logo from '../components/Logo';
import Playlists from "../components/Playlists";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Nav></Nav>
      </div>

      <div>
        <Logo></Logo>
      </div>

      {/* <div>
        <Login></Login>
      </div> */}

      <main>
        <Playlists></Playlists>
  
        <Gallery></Gallery>
        <Quote></Quote>
        <Donate></Donate>
        <Profile></Profile>
        {/* <Login></Login> */}
      </main>
      <div>
        <Logout></Logout>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
