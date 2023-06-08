// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import CartPageItem from "../../components/cartPageItem/CartPageItem";
import {
  calcTotalCartPrice,
  sumAllCartItems,
} from "../../scripts/shoppingCartLogic";
import { Link, useNavigate } from "react-router-dom";

// Image imports
import cardLogo from "../../images/logos/credit-card.png";
import swishLogo from "../../images/logos/swish.png";

// Stylesheet imports
import "./cartpage.css";

function CartPage() {
  const { cart, foodsMenu } = useContext(UserContext);
  const navigator = useNavigate();

  function directToPayment(paymentType) {
    navigator(`/payment/${paymentType}`);
  }

  if (sumAllCartItems(cart) > 0) {
    return (
      <div>
        <div id="cartPageRoot">
          <div id="cartSummaryContainer" className="cartPageContainer">
            <div id="totalSum" className="summaryText">
              Total: {calcTotalCartPrice(foodsMenu, cart)}kr
            </div>
            <p className="summaryText">Proceed to payment with</p>
            <div id="paymentOptionsContainer">
              <img
                src={cardLogo}
                alt="Card payment option clickable image"
                className="paymentOptionLinkImage"
                onClick={() => directToPayment("card")}
              />
              <img
                src={swishLogo}
                alt="Swish payment option clickable image"
                className="paymentOptionLinkImage"
                onClick={() => directToPayment("swish")}
              />
            </div>
          </div>
          <div id="cartItemsContainer" className="cartPageContainer">
            {Object.keys(cart).map((key) => {
              return (
                <CartPageItem
                  key={key}
                  foodItem={foodsMenu.find((foodObj) => foodObj.id == key)}
                  foodItemQuantity={cart[key]}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="emptyCartRoot">
        <div id="emptyCartContainer">
          <h3 className="emptyCartTitle">Your cart is empty!</h3>
          <p className="emptyCartText">
            But it doesnt have to be like that. Neither your cart or your
            stomach has to be empty
          </p>
          <Link to="/menu" className="emptyCartLink">
            Check out our menu and add something
          </Link>
        </div>
      </div>
    );
  }
}

export default CartPage;
