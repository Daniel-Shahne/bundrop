// Logic imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Validator logic imports
import {
  validateSWEPhoneNumber,
  validatePersonName,
  validateAdress,
  validateCreditCard,
} from "../../scripts/inputVerification";

// Subcomponents imports
import SwishPayment from "../../components/swishPayment/SwishPayment";

// Stylesheet imports
import "./paymentpage.css";

function PaymentPage() {
  // State variable containing page parameter
  const { paymentType } = useParams();
  // State variable containing which payment subcomponent to render
  // and is set by a useEffect
  const [paymentTypeComponent, setPaymentTypeComponent] = useState(null);
  // State variable containing error codes
  // TODO: Set this to an empty array after testing
  const [errorsList, setErrorsList] = useState([
    "Error 1",
    "Error 2",
    "Error 3",
    "Error 4",
  ]);
  // State variables containing the input values, and
  // if they are valid, and the validator function
  const [nameValue, setNameValue] = useState({
    value: "",
    isValid: false,
  });
  const [addressValue, setAddressValue] = useState({
    value: "",
    isValid: false,
  });
  const [phoneValue, setPhoneValue] = useState({
    value: "",
    isValid: false,
  });

  /** UseEffects for each of the input validation state
   * variables, which check if their value are valid.
   */
  // useEffect(() => {
  //   setNameValue((prevState) => ({
  //     ...prevState,
  //     isValid: validatePersonName(prevState.value),
  //   }));
  // }, [nameValue]);
  // useEffect(() => {
  //   setAddressValue((prevState) => ({
  //     ...prevState,
  //     isValid: validateAdress(prevState.value),
  //   }));
  // }, [addressValue]);

  /** Function which sets the state variable for each
   * user input to match the input fields
   */
  function handleInputChange(event, stateVarSetter) {
    stateVarSetter((prevState) => ({
      ...prevState,
      value: event.target.value,
    }));
  }

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
              id="adressInput"
              className="paymentInputField inputField"
              onChange={(event) => handleInputChange(event, setAddressValue)}
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
