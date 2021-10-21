import React from 'react';
import weird from "../../assets/cat/cat.jpg";
import joy from "../../assets/joy.jpg";
import explore from "../../assets/explore.jpg";
import forest from "../../assets/forest.jpg";
import pray from "../../assets/pray.jpg";
import travel from "../../assets/travel.jpg";
import think from "../../assets/think.jpg";

function Hero() {
    return (
<section className="my-5">
  <h1 id="about">My Playlists</h1>
  <img src={weird} className="my-2" style={{ width: "100%" }} alt="cover" />
  <img src={joy} className="my-2" style={{ width: "100%" }} alt="cover" />
  <img src={explore} className="my-2" style={{ width: "100%" }} alt="cover" />
  <img src={forest} className="my-2" style={{ width: "100%" }} alt="cover" />
  <img src={pray} className="my-2" style={{ width: "100%" }} alt="cover" />
  <img src={travel} className="my-2" style={{ width: "100%" }} alt="cover" />
  <img src={think} className="my-2" style={{ width: "100%" }} alt="cover" />


</section>
    );

}

export default Hero;