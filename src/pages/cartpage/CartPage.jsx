// Logic imports
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import CartPageItem from "../../components/cartPageItem/CartPageItem";
import { calcTotalCartPrice } from "../../scripts/shoppingCartLogic";

// Stylesheet imports
import "./cartpage.css";

function CartPage() {
  const { cart, foodsMenu } = useContext(UserContext);

  return (
    <div id="cartPageRoot">
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
      <div id="cartSummaryContainer" className="cartPageContainer">
        <div id="totalSum" className="summaryText">
          Total: {calcTotalCartPrice(foodsMenu, cart)}
        </div>
        <p className="summaryText">Proceed to payment with</p>
      </div>
    </div>
  );
}

export default CartPage;
