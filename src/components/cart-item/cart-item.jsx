import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { price, imageUrl, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item"></img>
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} * ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
