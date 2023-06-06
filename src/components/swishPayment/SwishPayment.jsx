// Logic imports
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { calcTotalCartPrice } from "../../scripts/shoppingCartLogic";
import { placeOrder } from "../../scripts/shoppingCartLogic";

// Image imports
import SwishLogo from "../../images/logos/swish.png";

// Stylesheet imports
import "./swishpayment.css";

function SwishPayment(props) {
  const [allInputsValid, setAllInputsValid] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("formButton invalid");

  const { user, cart, foodsMenu } = useContext(UserContext);

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

  function payForOrder() {
    if (!allInputsValid) {
      return;
    }

    let usersname = "";
    if (user !== null) {
      usersname = user.username;
    }
    placeOrder(
      cart,
      calcTotalCartPrice(foodsMenu, cart),
      props.nameStatVar.value,
      usersname
    );
  }

  return (
    <div id="swishPaymentRoot">
      <img id="swishPaymentLogo" src={SwishLogo} alt="Swish logo" />
      <button
        id="payWithSwishButton"
        className={buttonClassName}
        onClick={payForOrder}
      >
        Pay {calcTotalCartPrice(foodsMenu, cart)}kr with Swish
      </button>
    </div>
  );
}

export default SwishPayment;
