import React from "react";
import { ProductConsumer } from "../../context";
const Product = ({ product }) => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <figure
            className="product-list-grid-item"
            onClick={() => value.handleDetail(product.id)}
          >
            <img src={product.img} alt="" />
            <figcaption>
              <div className="product-info">
                <h3 className="title">{product.title}</h3>
                <p className="price">$ {product.price}</p>
              </div>

              <button
                className="btn-primary"
                disabled={product.inCart ? true : false}
                onClick={() => {
                  value.addToCart(product.id);
                }}
              >
                {product.inCart ? <p>In Cart</p> : <p>Add to Cart</p>}
              </button>
            </figcaption>
          </figure>
        );
      }}
    </ProductConsumer>
  );
};

export default Product;
