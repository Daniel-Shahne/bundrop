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
      <img src={props.item.imageSource} />
    </div>
  );
}

export default MenuItemCard;
