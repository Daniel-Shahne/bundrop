// Logic imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Subcomponents imports
import SwishPayment from "../../components/swishPayment/SwishPayment";

// Stylesheet imports
import "./paymentpage.css";

function PaymentPage() {
  const { paymentType } = useParams();
  const [paymentTypeComponent, setPaymentTypeComponent] = useState(null);

  /** Sets payment type depending on params. Maybe overkill
   * for just two payment types but in the name of MAINTAINABILITY
   * i'll write it like this. Prevents a giant if/else type scenario
   * in the jsx itself.
   */
  useEffect(() => {
    if (paymentType === "swish") {
      setPaymentTypeComponent(<SwishPayment />);
    } else if (paymentType === "card") {
      console.log("not yet implemented");
    }
  }, []);

  return (
    <div id="paymentPageRoot">
      <div id="paymentContainer" className="paymentInputsContainer">
        <div id="commonPaymentInfo">
          <div className="paymentInfoRow">
            <label
              htmlFor="nameInput"
              id="nameInputLabel"
              className="paymentInputLabel"
            >
              Name
            </label>
            <input type="text" id="adressInput" className="paymentInputField" />
          </div>
          <div className="paymentInfoRow">
            <label
              htmlFor="adressInput"
              id="adressInputLabel"
              className="paymentInputLabel"
            >
              Adress
            </label>
            <input type="text" id="nameInput" className="paymentInputField" />
          </div>
          <div className="paymentInfoRow">
            <label
              htmlFor="phoneInput"
              id="phoneInputLabel"
              className="paymentInputLabel"
            >
              Phone
            </label>
            <input type="text" id="phoneInput" className="paymentInputField" />
          </div>
          <div className="paymentInfoRow">
            <label
              htmlFor="instructionsInput"
              id="nameInputLabel"
              className="paymentInputLabel"
            >
              Special instructions
            </label>
            <textarea
              name="instructionsInput"
              id="instructionsInput"
              cols="30"
              rows="4"
              className="paymentInputField"
            ></textarea>
          </div>
        </div>
        <div id="paymentTypeComponent">
          {paymentTypeComponent !== null ? paymentTypeComponent : null}
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
