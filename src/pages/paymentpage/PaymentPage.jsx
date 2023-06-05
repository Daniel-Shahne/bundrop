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
    "Address must be atleast 5 characters long",
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

  /** useEffects which update the errorsList state variable to contain
   * the respective input types error message. If their isValid are true
   * meaning that the input is valid for submission then the error msg needs
   * to be removed from the array. Otherwise its added.
   */
  // useEffect for the address input
  useEffect(() => {
    const errorMsg = "Address must be atleast 5 characters long";
    // Should only trigger on first time load when isValid
    // is false and the errorsList contains the error
    if (!addressValue.isValid && errorsList.includes(errorMsg)) {
      return;
    }

    // Removing the error msg
    if (addressValue.isValid && errorsList.includes(errorMsg)) {
      setErrorsList((prevState) => {
        const newArray = [...prevState];
        const indexOfMsg = newArray.indexOf(errorMsg);
        if (indexOfMsg > -1) {
          return newArray.splice(indexOfMsg, 1);
        }
      });
    }
    // Adding the error msg
    else if (!addressValue.isValid && !errorsList.includes(errorMsg)) {
      setErrorsList((prevState) => {
        const newArray = [...prevState];
        newArray.push(errorMsg);
        return newArray;
      });
    }
  }, [addressValue]);

  /** Function which will set both the value and isValid property
   * of a state variable. Since those are the only properties of the
   * state variable no callback is necessary. Both are set by the event
   * value
   */
  function handleInputChange(event, stateVarSetter, inputValidator) {
    stateVarSetter({
      value: event.target.value,
      isValid: inputValidator(event.target.value),
    });
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
            {errorsList.map((errorText, index) => (
              <div className="errorTextRow" key={index}>
                {errorText}
              </div>
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
