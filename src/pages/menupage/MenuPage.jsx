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
  const [searchFavourites, setSearchFavourites] = useState(false);
  const [searchCategories, setSearchCategories] = useState({
    sodas: false,
    burgers: false,
    fries: false,
  });

  function setCategorySelected(category, inputId) {
    setSearchCategories((prevState) => ({
      ...prevState,
      [category]: !document.getElementById(inputId).checked,
    }));
  }

  function handleSearchInputChange(event) {
    setSearchTerm(() => event.target.value);
  }

  function handleFavouritesSearchToggle() {
    setSearchFavourites((prevState) => !prevState);
  }

  function clearFilters() {
    // // Sets search categories all to false
    setSearchCategories(() => ({
      sodas: false,
      burgers: false,
      fries: false,
    }));
    // Unchecks all the checkboxes for category filtering
    var checkboxes = document.querySelectorAll(".foodCategoryCB");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }

    // Sets favourites only filtering to false
    setSearchFavourites(() => false);
    // Unchecks favourites only checkbox, but only if user
    // is logged in since the element doesnt exist otherwise
    if (user !== null) {
      document.getElementById("favouritesCB").checked = false;
    }

    // Sets searchTerm to an empty string
    setSearchTerm(() => "");
    // Clears search term input
    document.getElementById("searchInput").value = "";
  }

  // useEffect(() => {
  //   console.log(searchFavourites);
  // }, [searchFavourites]);

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
              <input
                id="searchInput"
                placeholder="Search for..."
                onChange={(event) => handleSearchInputChange(event)}
              />
              <button
                id="searchClearFilters"
                className="searchButton"
                onClick={clearFilters}
              >
                Clear filters
              </button>
              {user && (
                <div id="favouritesRadioContainer" className="searchButton">
                  <input
                    type="checkbox"
                    id="favouritesCB"
                    onChange={handleFavouritesSearchToggle}
                  />
                  <label htmlFor="favouritesCB" id="favOnlyTextLabel">
                    <span>Favourites only</span>
                  </label>
                </div>
              )}
            </div>
          </div>
          <div id="foodCardItemsGrid">
            {foodsMenu
              .filter((mappedItem) => {
                if (searchTerm === "") {
                  return true;
                } else {
                  return mappedItem.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                }
              })
              .filter((mappedItem) => {
                if (
                  !searchCategories.sodas &&
                  !searchCategories.burgers &&
                  !searchCategories.fries
                ) {
                  return true;
                } else {
                  return searchCategories[mappedItem.category];
                }
              })
              .filter((mappedItem) => {
                if (searchFavourites && user !== null) {
                  return user.favourites.includes(mappedItem.id);
                } else {
                  return true;
                }
              })
              .map((mappedItem) => {
                return (
                  <MenuItemCard
                    key={mappedItem.id}
                    item={mappedItem}
                    category={mappedItem.category}
                    isFavourite={
                      user && user.favourites.includes(mappedItem.id)
                    }
                    data-foodCategory={mappedItem.category}
                    data-foodName={mappedItem.name}
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
