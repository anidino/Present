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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <Nav></Nav>
      <Time></Time>
      <Logo></Logo>
      <Quote></Quote>
    
      <main>
      <Search></Search>
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
