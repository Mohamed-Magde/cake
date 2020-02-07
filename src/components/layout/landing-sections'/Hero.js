import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="heading-1">Baked&co.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          odit placeat. Enim natus et error commodi cupiditate sint quasi ab,
          ipsum totam labore dignissim
        </p>
        <Link className="btn-primary">Shop Now</Link>
      </div>
    </header>
  );
};

export default Hero;
