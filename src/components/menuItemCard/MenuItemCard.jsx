// Logic imports
import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { toggleClass768px } from "../../scripts/animationScripts";

// Stylesheet imports
import "./menuitemcard.css";

/* Receives a prop.item that is the food item. Common
  properties of food items are id, description, name
  and price. They also contain an imageSource which
  is a path to the images relative this component*/
function MenuItemCard(props) {
  const [importedImage, setImportedImage] = useState(null);

  // `${props.item.imageSource}`
  return (
    <div className="menuItemCard">
      <img className="menuItemPicture" src={props.item.imageSource} />
      <div className="menuItemNameCont cardTextContainer">
        <span className="menuItemName">{props.item.name}</span>
      </div>
      <div className="menuItemDescCont cardTextContainer">
        <span className="menuItemDescription">{props.item.description}</span>
      </div>
      <div className="menuItemPriceCont cardTextContainer">
        <span className="menuItemPrice">{props.item.price} SEK</span>
      </div>
    </div>
  );
}

export default MenuItemCard;
