import React from 'react';
import Profile from './components/Profile';
import Time from './components/Time';
import Quote from './components/Quote';
import Nav from './components/Nav';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Logout from './components/Logout';
import Logo from './components/Logo';
import Playlists from './components/Playlists';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <div>
      <Nav></Nav>
      </div>


      <div>
      <Logo></Logo>
      <Quote></Quote>
      <Time></Time>
      </div>
    
      <main>
      <Search></Search>
      <Playlists></Playlists>
      <Gallery></Gallery>
      <Donate></Donate>
      <Profile></Profile>
    
      </main>
      <div>
        <Logout></Logout>
      </div>
    </div>
  );
}

export default App;
