import React from 'react';
import Hero from './components/Hero';
import Login from './components/Login';
import Nav from './components/Nav';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Signup from './components/Signup';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Login></Login>
        <Signup></Signup>
      <main>
      <Search></Search>
      <Gallery></Gallery>
 
        <Hero></Hero>

      </main>
    </div>
  );
}

export default App;
