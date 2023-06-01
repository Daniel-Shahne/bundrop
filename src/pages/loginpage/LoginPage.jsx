// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

// image imports
import Logo from "../../images/logos/logo color.png";

// Stylesheet imports
import "./loginpage.css";

function LoginPage() {
  return (
    <div id="loginPageRoot">
      <form id="loginContainer">
        <img src={Logo} alt="BunDrop logo" id="imageRow" />
        <div className="containerRow inputsRow">
          <label
            htmlFor="usernameInput"
            className="inputLabel"
            id="usernameLabel"
          >
            Username
          </label>
          <input type="text" className="inputField" id="usernameInput" />
        </div>
        <div className="containerRow inputsRow">
          <label
            htmlFor="usernameInput"
            className="inputLabel"
            id="passwordLabel"
          >
            Password
          </label>
          <input type="password" className="inputField" id="passwordInput" />
        </div>
        <div className="containerRow buttonsRow">
          <button className="formButton" type="submit">
            Login
          </button>
          <Link to="/register" className="formButton">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
