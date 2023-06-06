// Logic imports
import React, { useEffect, useState } from "react";

// Image imports
import SwishLogo from "../../images/logos/swish.png";

// Stylesheet imports
import "./swishpayment.css";

function SwishPayment(props) {
  const [allInputsValid, setAllInputsValid] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("formButton invalid");

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
        Pay with Swish
      </button>
    </div>
  );
}

export default SwishPayment;
