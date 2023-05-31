// Logic imports
import React from "react";
import { useContext, useEffect, useLayoutEffect } from "react";
import { UserContext } from "../../App";
import { toggleClass768px } from "../../scripts/animationScripts";

// Component imports
import MenuItemCard from "../../components/menuItemCard/MenuItemCard";

// Stylesheet imports
import "./menupage.css";

function MenuPage() {
  const { foodsMenu } = useContext(UserContext);

  // TODO: Sometimes on first page load toggleClass wont be run?
  useLayoutEffect(() => {
    window.addEventListener("resize", () =>
      toggleClass768px(".foodCategoryLi", "underlineAnimW")
    );
    toggleClass768px(".foodCategoryLi", "underlineAnimW");
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="menuPageBodyRoot">
      {/* Checks if menus are fetched */}
      {foodsMenu !== null ? (
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
          <div id="foodCardItemsGrid">
            {foodsMenu.map((mappedItem) => {
              return (
                <MenuItemCard
                  key={mappedItem.id}
                  item={mappedItem}
                  category={mappedItem.category}
                />
              );
            })}
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
