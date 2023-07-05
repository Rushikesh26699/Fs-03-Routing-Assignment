import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className="home">
      <div className="heading">
        <p id="title">Welcome To ,</p>
        <p id="logo-name">SHOPIFY</p>
        <p id="tagline">India's Best Shopping Site</p>
        <button id="button">EXPLORE</button> &nbsp;&nbsp;
        <button id="button">LOGIN</button> &nbsp;&nbsp;
        <button id="button">SIGN-UP</button> &nbsp;&nbsp;
        <Typewriter 
          options={{
            strings: ["Men's", "Women's","Electronics"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
