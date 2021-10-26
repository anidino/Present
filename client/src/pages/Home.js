import React from "react";
import Profile from "../components/Profile";
import Quote from "../components/Quote";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import Donate from "../components/Donate";
import Logout from "../components/Logout";
import Logo from '../components/Logo';
import Playlists from "../components/Playlists";
import Footer from "../components/Footer";
import PopUp from "../components/Alert";
import "../../src/App.css";


const Home = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>

      <div>
        <Logo></Logo>
        <PopUp></PopUp>
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
