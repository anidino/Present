import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Login from "../components/Login"


const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Nav />
    </div>
  );
};

export default Home;