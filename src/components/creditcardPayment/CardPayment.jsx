import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { calcTotalCartPrice } from "../../scripts/shoppingCartLogic";
import { placeOrder } from "../../scripts/shoppingCartLogic";
import { useNavigate } from "react-router-dom";

import "./cardpayment.css";

function CardPayment(props) {
  const [allInputsValid, setAllInputsValid] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("formButton invalid");
  const { user, cart, setCart, foodsMenu } = useContext(UserContext);
  const navigator = useNavigate();

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
    setCart({});
    navigator("/confirm");
  }

  return (
    <div id="cardPaymentRoot">
      <label htmlFor="cardInput" className="inputLabel">
        Card number
      </label>
      <input id="cardInput" type="text" className="inputField" />
      <button
        id="payWithCardButton"
        className={buttonClassName}
        onClick={payForOrder}
      >
        Pay {calcTotalCartPrice(foodsMenu, cart)}kr with Card
      </button>
    </div>
  );
}

export default CardPayment;
