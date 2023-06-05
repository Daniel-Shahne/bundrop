import React from "react";
import "./cartpageitem.css";

function CartPageItem({ foodItem, foodItemQuantity }) {
  return <div>Food name: {foodItem.name}</div>;
}

export default CartPageItem;
