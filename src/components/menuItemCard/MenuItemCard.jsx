// Logic imports
import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { updateSingleCartItem } from "../../scripts/shoppingCartLogic";
import { toggleUserFavourite } from "../../scripts/userLogic";

// Stylesheet imports
import "./menuitemcard.css";

/* Receives a prop.item that is the food item. Common
  properties of food items are id, description, name
  and price. They also contain an imageSource which
  is a path to the images relative this component*/
function MenuItemCard(props) {
  const [importedImage, setImportedImage] = useState(null);
  const { user, setUser, cart, setCart } = useContext(UserContext);

  // `${props.item.imageSource}`
  return (
    <div className="menuItemCard" data-isfavourite={props.isFavourite}>
      <img className="menuItemPicture" src={props.item.imageSource} />
      <div className="menuItemNameCont cardTextContainer">
        <span className="menuItemName">{props.item.name}</span>
      </div>
      <div className="menuItemDescCont cardTextContainer">
        <span className="menuItemDescription ">{props.item.description}</span>
      </div>
      <div className="menuItemCartCont">
        <button
          className="decrementCartItem cartChangeButton"
          onClick={() => updateSingleCartItem(cart, setCart, props.item.id, -1)}
        >
          -
        </button>
        <span className="itemsInCart">{cart[props.item.id]}</span>
        <button
          className="incrementCartItem cartChangeButton"
          onClick={() => updateSingleCartItem(cart, setCart, props.item.id, 1)}
        >
          +
        </button>
      </div>
      <div className="menuItemPriceStarCont cardTextContainer">
        <button
          className="favouriteStar"
          onClick={() => toggleUserFavourite(user, setUser, props.item.id)}
        >
          ★
        </button>
        <span className="menuItemPrice">{props.item.price} SEK</span>
      </div>
    </div>
  );
}

export default MenuItemCard;
