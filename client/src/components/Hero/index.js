import React from 'react';
import coverImage from "../../assets/cat/cat.jpg"

function Hero() {
    return (
<section className="my-5">
  <h1 id="about">Who am I?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>
    );

}

export default Hero;