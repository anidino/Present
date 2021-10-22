import React from 'react';
import Profile from './components/Profile';
import Time from './components/Time';
import Quote from './components/Quote';
import Nav from './components/Nav';
import Search from './components/Search';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <Nav></Nav>
      <Time></Time>
      <Quote></Quote>
    
      <main>
      <Search></Search>
      <Gallery></Gallery>
 
        <Profile></Profile>

      </main>
    </div>
  );
}

export default App;
