// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { submitLoginForm } from "./loginpagescript";

// image imports
import Logo from "../../images/logos/logo color.png";

// Stylesheet imports
import "./loginpage.css";

function LoginPage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div id="loginPageRoot">
      <form
        id="loginContainer"
        onSubmit={(event) => submitLoginForm(event, setUser)}
      >
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
          <input
            type="submit"
            name="submitLogin"
            className="formButton"
            value="Login"
          />
          <input
            type="submit"
            name="submitRegister"
            className="formButton"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
