import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { tryRegisterUser } from "./registerpagescript";

import Logo from "../../images/logos/logo color.png";

import "./registerpage.css";

function RegisterPage() {
  const { user, setUser } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState([]);
  const navigator = useNavigate();

  return (
    <div id="loginPageRoot">
      <form
        id="loginContainer"
        className="registerContainer"
        onSubmit={(event) =>
          tryRegisterUser(event, setUser, navigator, setErrorMsg)
        }
      >
        <img src={Logo} alt="BunDrop logo" id="imageRow" />
        {errorMsg.length > 0
          ? errorMsg.map((errorMess) => <p>{errorMess}</p>)
          : null}
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
          <input type="password" className="inputField" id="passwordInput1" />
        </div>
        <div className="containerRow inputsRow">
          <label
            htmlFor="usernameInput"
            className="inputLabel"
            id="passwordLabel"
          >
            Confirm password
          </label>
          <input type="password" className="inputField" id="passwordInput2" />
        </div>
        <input
          type="submit"
          name="submitRegister"
          className="formButton"
          value="Register"
        />
      </form>
    </div>
  );
}

export default RegisterPage;
