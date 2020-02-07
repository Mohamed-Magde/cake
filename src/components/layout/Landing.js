import React, { Fragment } from "react";
import Hero from "./landing-sections'/Hero";
import Featured from "./landing-sections'/Featured";
import Customers from "./landing-sections'/Customers";
const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Featured />
      <Customers />
    </Fragment>
  );
};

export default Landing;
