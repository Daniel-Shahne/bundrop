// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

// Component imports
import MenuItemCard from "../components/menuItemCard/MenuItemCard";

// Stylesheet imports

function MenuPage() {
  const { burgersMenu, friesMenu, sodasMenu } = useContext(UserContext);

  return (
    <div id="menuPageBody">
      {/* Checks if all menus are loaded in */}
      {burgersMenu && friesMenu && sodasMenu ? (
        // Contains all the burgers
        <div id="burgersContainer">
          {burgersMenu.map((mappedItem) => {
            return <MenuItemCard key={mappedItem.id} item={mappedItem} />;
          })}
        </div>
      ) : (
        <div>Unloaded</div>
      )}
    </div>
  );
}

export default MenuPage;
