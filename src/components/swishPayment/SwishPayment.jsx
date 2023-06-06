// Logic imports
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { calcTotalCartPrice } from "../../scripts/shoppingCartLogic";

// Image imports
import SwishLogo from "../../images/logos/swish.png";

// Stylesheet imports
import "./swishpayment.css";

function SwishPayment(props) {
  const [allInputsValid, setAllInputsValid] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("formButton invalid");

  const { cart, foodsMenu } = useContext(UserContext);

  useEffect(() => {
    setAllInputsValid(
      props.nameStatVar.isValid &&
        props.addressStatVar.isValid &&
        props.phoneStatVar.isValid
    );
  }, [props.nameStatVar, props.addressStatVar, props.phoneStatVar]);

  useEffect(() => {
    setButtonClassName(`formButton${allInputsValid ? " valid" : " invalid"}`);
  }, [allInputsValid]);

  return (
    <div id="swishPaymentRoot">
      <img id="swishPaymentLogo" src={SwishLogo} alt="Swish logo" />
      <button id="payWithSwishButton" className={buttonClassName}>
        Pay {calcTotalCartPrice(foodsMenu, cart)}kr with Swish
      </button>
    </div>
  );
}

export default SwishPayment;
