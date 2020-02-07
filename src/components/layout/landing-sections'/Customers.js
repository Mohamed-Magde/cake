import React from "react";
import { blogs } from "../../../data";
import { Link } from "react-router-dom";

const Customers = () => {
  return (
    <div className="blogs">
      <div className="container">
        <div className="blogs-title">
          <h1 className="heading-1">Blogs</h1>
          <p className="blogs-desc">CHAPTER 47 - A SENSORY JOURNEY</p>
        </div>
        <div className="blogs-grid">
          {blogs.map(item => {
            return (
              <figure className="blogs-grid-block" key={item.id}>
                <img src={item.img} alt="" />
                <figcaption>
                  <h3 className="hedaing-3">{item.title}</h3>
                  <p>{item.info}</p>
                  <Link className="btn-secondary">Read The Article</Link>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Customers;
