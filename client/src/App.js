import React from 'react';
import Hero from './components/Hero';
import Login from './components/Login';
import Nav from './components/Nav';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <main>
        <Hero></Hero>
        <Login></Login>
        <Nav></Nav>
      </main>
    </div>
  );
}

export default App;
