// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { updateSingleCartItem } from "../../scripts/shoppingCartLogic";

// Stylesheet imports
import "./cartpageitem.css";

function CartPageItem({ foodItem, foodItemQuantity }) {
  const { cart, setCart } = useContext(UserContext);

  return (
    <div className="cartPageItemRoot">
      <span className="itemName">
        {foodItem.name}
        <span className="itemPrice"> ({foodItem.price} SEK)</span>
      </span>
      <div className="quantityControlContainer">
        <button
          className="decrementCartItem cartChangeButton"
          onClick={() => updateSingleCartItem(cart, setCart, foodItem.id, -1)}
        >
          -
        </button>
        <span className="itemsInCart2">{cart[foodItem.id]}</span>
        <button
          className="incrementCartItem cartChangeButton"
          onClick={() => updateSingleCartItem(cart, setCart, foodItem.id, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartPageItem;
