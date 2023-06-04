// Logic imports
import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { toggleClass768px } from "../../scripts/animationScripts";
import { sumAllCartItems } from "../../scripts/shoppingCartLogic";

// Image imports
import Logo from "../../images/logos/logo color.png";

// Stylesheet imports
import "./navbar.css";

function NavBar() {
  const { user, setUser, cart } = useContext(UserContext);

  useEffect(() => {
    window.addEventListener("resize", () =>
      toggleClass768px(".linkToPage", "underlineAnimW")
    );
    toggleClass768px(".linkToPage", "underlineAnimW");
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  function logOut() {
    setUser(() => null);
  }

  return (
    <div id="navbar">
      <img id="navbarLogo" src={Logo} alt="BunDrop logo" />
      <div id="linksList">
        <Link to="/" className="linkToPage">
          Home
        </Link>
        <Link to="/menu" className="linkToPage">
          Menu
        </Link>
        <Link to="/cart" className="linkToPage">
          Cart:{" "}
          <span className="cartQuantity" data-quantity={sumAllCartItems(cart)}>
            {sumAllCartItems(cart)}
          </span>
        </Link>
        {user === null ? (
          <Link to="/login" className="linkToPage">
            Login/Register
          </Link>
        ) : (
          <Link to="/" className="linkToPage" onClick={logOut}>
            Log out
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
