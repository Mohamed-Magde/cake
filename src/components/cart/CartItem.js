import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cart-grid-block">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="cart-grid-block-item">
        <p className="name">Product : </p> <span>{title}</span>
      </div>

      <div className="cart-grid-block-item">
        <p className="price">Price : </p> <span>${price}</span>
      </div>

      <div className="cart-grid-block-item check-box">
        <div className="icons">
          <i
            class="fas fa-plus"
            onClick={() => {
              return increment(id);
            }}
          ></i>

          <i
            class="fas fa-minus"
            onClick={() => {
              return decrement(id);
            }}
          ></i>
        </div>
        <span>{count}</span>
      </div>

      <div className="cart-grid-block-item">
        <p className="total">Total : </p> <span>${total}</span>
      </div>
    </div>
  );
};

export default CartItem;
