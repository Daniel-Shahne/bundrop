// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";

// Component imports
import MenuItemCard from "../../components/menuItemCard/MenuItemCard";

// Image imports
import TallKitchen from "../../images/restaurant/standardKitchen.jpg";

// Stylesheet imports
import "./menupage.css";

function MenuPage() {
  const { burgersMenu, friesMenu, sodasMenu } = useContext(UserContext);

  return (
    <div
      id="menuPageBodyRoot"
      style={{ backgroundImage: `url(${TallKitchen})` }}
    >
      {/* Checks if menus are fetched */}
      {burgersMenu && friesMenu && sodasMenu ? (
        // The real menu page begins here
        <div id="menuPageBody">
          <div id="categoryAndSearchContainer">
            <ul id="foodCategoriesList">
              <li className="foodCategoryLi">Sodas</li>
              <li className="foodCategoryLi">Burgers</li>
              <li className="foodCategoryLi">Fries</li>
            </ul>
            <div>
              <input id="searchInput" />
              <button>Search</button>
            </div>
          </div>
          <div id="foodCategoriesItems">
            <div id="burgersContainer">
              {burgersMenu.map((mappedItem) => {
                return <MenuItemCard key={mappedItem.id} item={mappedItem} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        // If menus couldnt be fetched, displays error
        <div>Unloaded</div>
      )}
    </div>
  );
}

export default MenuPage;
