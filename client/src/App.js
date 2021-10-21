import React from 'react';
import Hero from './components/Hero';
import Login from './components/Login';
import Nav from './components/Nav';
import Search from './components/Search';
import Signup from './components/Signup';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Login></Login>
        <Signup></Signup>
        <Hero></Hero>
        <Search></Search>
      </main>
    </div>
  );
}

export default App;
