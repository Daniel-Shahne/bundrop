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
  // State variables containing the input values, and
  // if they are valid, and the validator function
  const [nameValue, setNameValue] = useState({
    value: "",
    isValid: false,
    errorMsg: "Name can only contain letters, spaces and ' and - characters",
  });
  const [addressValue, setAddressValue] = useState({
    value: "",
    isValid: false,
    errorMsg: "Address must be atleast 5 characters long",
  });
  const [phoneValue, setPhoneValue] = useState({
    value: "",
    isValid: false,
    errorMsg: "Only Swedish numbers allowed",
  });
  /** Array containing input status state variables, mainly for use
   * in displaying feedback to the user
   */
  const inputValuesStates = [nameValue, addressValue, phoneValue];

  /** Function which will set both the value and isValid property
   * of a state variable. Since those are the only properties of the
   * state variable no callback is necessary. Both are set by the event
   * value
   */
  function handleInputChange(event, stateVarSetter, inputValidator) {
    stateVarSetter((prevState) => ({
      ...prevState,
      value: event.target.value,
      isValid: inputValidator(event.target.value),
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
            {inputValuesStates
              .filter(
                (inputValueState) =>
                  !inputValueState.isValid && inputValueState.value !== ""
              )
              .map((filteredInputValueState) => (
                <p className="errorTextRow">
                  {filteredInputValueState.errorMsg}
                </p>
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
              onChange={(event) =>
                handleInputChange(event, setNameValue, validatePersonName)
              }
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
              onChange={(event) =>
                handleInputChange(event, setAddressValue, validateAdress)
              }
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
              onChange={(event) =>
                handleInputChange(event, setPhoneValue, validateSWEPhoneNumber)
              }
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
