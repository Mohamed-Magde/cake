import React, { Fragment } from "react";
import { collection } from "../../../data";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <Fragment>
      <div className="collection">
        <div className="container">
          <h2 className="heading-2">Collection</h2>
          <div className="collection-grid">
            {collection.map(item => {
              return (
                <figure className="collection-grid-block">
                  <img src={item.img} alt="" key={item.id} />
                  <figcaption>
                    <span className="name">{item.title}</span>
                    <Link className="btn-primary">Shop now</Link>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sale">
        <div className="container">
          <p className="sale-desc">
            SALE <span>Up to</span> 70%
          </p>
          <Link className="btn-secondary">Shop Now</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Featured;
