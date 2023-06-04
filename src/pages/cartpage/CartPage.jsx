import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";

function CartPage() {
  const { cart } = useContext(UserContext);

  return (
    <div id="cartPageRoot">
      <div id="cartSummaryContainer"></div>
      <div id="cartItemsContainer"></div>
    </div>
  );
}

export default CartPage;
