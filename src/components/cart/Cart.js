import React, { Fragment } from "react";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";

const Cart = () => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <div className="cart">
                <div className="container">
                  <div className="cart-title">
                    <h1 className="heading-1">Your Cart</h1>
                  </div>
                  <CartList value={value} />
                </div>
              </div>
            );
          } else {
            return (
              <div className="cart">
                <div className="container">
                  <div className="cart-title">
                    <h1 className="heading-1">This Cart is Empty</h1>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    </Fragment>
  );
};

export default Cart;
