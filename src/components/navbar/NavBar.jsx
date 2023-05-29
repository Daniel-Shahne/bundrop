// Logic imports
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

// Image imports
import Logo from "../../images/logos/logo color.png";

// Stylesheet imports
import "./navbar.css";
function NavBar() {
  const { user } = useContext(UserContext);

  return (
    <div id="navbar">
      <img id="navbarLogo" src={Logo} alt="BunDrop logo" />
      <ul id="linksList">
        <li className="linkToPage">Home</li>
        <li className="linkToPage">Menu</li>
        <li className="linkToPage">Cart</li>
        {user === null ? (
          <li className="linkToPage">Login</li>
        ) : (
          <li className="linkToPage">Account</li>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
