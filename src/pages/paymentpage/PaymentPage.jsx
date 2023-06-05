// Logic imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Subcomponents imports
import SwishPayment from "../../components/swishPayment/SwishPayment";

// Stylesheet imports
import "./paymentpage.css";

function PaymentPage() {
  // State variables
  const { paymentType } = useParams();
  const [paymentTypeComponent, setPaymentTypeComponent] = useState(null);
  // TODO: Set this to an empty array after testing
  const [errorsList, setErrorsList] = useState([
    "Error 1",
    "Error 2",
    "Error 3",
    "Error 4",
  ]);

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
          <div id="errorsTexts">
            {errorsList.map((errorText) => (
              <div className="errorTextRow">{errorText}</div>
            ))}
          </div>
          <div className="paymentInfoRow">
            <label
              htmlFor="nameInput"
              id="nameInputLabel"
              className="paymentInputLabel inputLabel"
            >
              Name
            </label>
            <input
              type="text"
              id="adressInput"
              className="paymentInputField inputField"
            />
          </div>
          <div className="paymentInfoRow">
            <label
              htmlFor="adressInput"
              id="adressInputLabel"
              className="paymentInputLabel inputLabel"
            >
              Address
            </label>
            <input
              type="text"
              id="nameInput"
              className="paymentInputField inputField"
            />
          </div>
          <div className="paymentInfoRow">
            <label
              htmlFor="phoneInput"
              id="phoneInputLabel"
              className="paymentInputLabel inputLabel"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phoneInput"
              className="paymentInputField inputField"
            />
          </div>
          <div className="paymentInfoRow">
            <label
              htmlFor="instructionsInput"
              id="nameInputLabel"
              className="paymentInputLabel inputLabel"
            >
              Special instructions
            </label>
            <textarea
              name="instructionsInput"
              id="instructionsInput"
              cols="30"
              rows="4"
              maxLength={30 * 4}
              className="paymentInputField inputField"
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
