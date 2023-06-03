// Logic imports
import React, { useState } from "react";
import { useContext, useEffect, useLayoutEffect } from "react";
import { UserContext } from "../../App";
import { toggleClass768px } from "../../scripts/animationScripts";

// Component imports
import MenuItemCard from "../../components/menuItemCard/MenuItemCard";

// Stylesheet imports
import "./menupage.css";

function MenuPage() {
  // Context variables containing logged in user and the
  // foods menu
  const { user, foodsMenu } = useContext(UserContext);

  // State variables containing user search information
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategories, setSearchCategories] = useState({
    sodas: true,
    burgers: true,
    fries: true,
  });

  function determineVisibility(
    searchTerm,
    searchCategories,
    itemName,
    itemCategory
  ) {}

  function setCategorySelected(category, inputId) {
    setSearchCategories((prevState) => ({
      ...prevState,
      [category]: document.getElementById(inputId).checked,
    }));
  }

  return (
    <div id="menuPageBodyRoot">
      {/* Checks if menus are fetched */}
      {foodsMenu !== null ? (
        // The real menu page begins here
        <div id="menuPageBody">
          <div id="categoryAndSearchContainer">
            <div id="foodCategoriesList">
              <input
                id="burgersCheckbox"
                type="checkbox"
                className="foodCategoryCB"
                value="burgers"
              />
              <label
                htmlFor="burgersCheckbox"
                className="cbCatLabel"
                onClick={() =>
                  setCategorySelected("burgers", "burgersCheckbox")
                }
              >
                <span className="catName">Burgers</span>
              </label>

              <input
                id="friesCheckbox"
                type="checkbox"
                className="foodCategoryCB"
                value="fries"
              />
              <label
                htmlFor="friesCheckbox"
                className="cbCatLabel"
                onClick={() => setCategorySelected("fries", "friesCheckbox")}
              >
                <span className="catName">Fries</span>
              </label>

              <input
                id="sodasCheckbox"
                type="checkbox"
                className="foodCategoryCB"
                value="sodas"
              />
              <label
                htmlFor="sodasCheckbox"
                className="cbCatLabel"
                onClick={() => setCategorySelected("sodas", "sodasCheckbox")}
              >
                <span className="catName">Sodas</span>
              </label>
            </div>
            <div id="searchContainer">
              <input id="searchInput" placeholder="Search for..." />
              <button id="searchClearFilters" className="searchButton">
                Clear filters
              </button>
              <button id="searchFavouritesOnly" className="searchButton">
                Favourites only
              </button>
            </div>
          </div>
          <div id="foodCardItemsGrid">
            {foodsMenu.map((mappedItem) => {
              return (
                <MenuItemCard
                  key={mappedItem.id}
                  item={mappedItem}
                  category={mappedItem.category}
                  isFavourite={user && user.favourites.includes(mappedItem.id)}
                  userSearchTerm={searchTerm}
                  userSearchCategories={searchCategories}
                  detVisFunctionRef={determineVisibility}
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
