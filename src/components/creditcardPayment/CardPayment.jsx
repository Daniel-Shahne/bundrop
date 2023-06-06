import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { calcTotalCartPrice } from "../../scripts/shoppingCartLogic";
import { placeOrder } from "../../scripts/shoppingCartLogic";
import { useNavigate } from "react-router-dom";
import { validateCreditCard } from "../../scripts/inputVerification";

import "./cardpayment.css";

function CardPayment(props) {
  const [allInputsValid, setAllInputsValid] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("formButton invalid");
  const { user, cart, setCart, foodsMenu } = useContext(UserContext);
  const navigator = useNavigate();
  const [cardValue, setCardValue] = useState({
    value: "",
    isValid: false,
    errorMsg: "Enter a valid credit card",
  });

  useEffect(() => {
    setAllInputsValid(
      props.nameStatVar.isValid &&
        props.addressStatVar.isValid &&
        props.phoneStatVar.isValid &&
        cardValue.isValid
    );
  }, [props.nameStatVar, props.addressStatVar, props.phoneStatVar, cardValue]);
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

  function handleInputChange(event, stateVarSetter, inputValidator) {
    stateVarSetter((prevState) => ({
      ...prevState,
      value: event.target.value,
      isValid: inputValidator(event.target.value),
    }));
  }

  return (
    <div id="cardPaymentRoot">
      <p>
        {!cardValue.isValid && cardValue.value !== ""
          ? cardValue.errorMsg
          : null}
      </p>
      <label htmlFor="cardInput" className="inputLabel">
        Card number
      </label>
      <input
        id="cardInput"
        type="text"
        className="inputField"
        onChange={(event) =>
          handleInputChange(event, setCardValue, validateCreditCard)
        }
        placeholder="0000 0000 0000 0000"
      />
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
