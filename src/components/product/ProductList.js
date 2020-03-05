import React, { useState } from "react";
import { storeProducts } from "../../data";
import Product from "./Product";
import { ProductConsumer } from "../../context";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list-title">
        <h1 className="heading-1">Product List</h1>
      </div>
      <div className="container">
        <div className="product-list-grid">
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
