import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logos/logo color.png";

import "./orderconfirmpage.css";

function OrderConfirmPage() {
  const timeToDelivery = Math.floor(Math.random() * 31) + 20;

  return (
    <div className="orderConfirmPageRoot">
      <div className="confirmPanel">
        <img id="confirmBundropLogo" src={Logo} alt="BunDrop logo" />
        <h3 id="confirmTitle">Thank you for your order!</h3>
        <p className="confirmText">
          Your delivery will be with you in {timeToDelivery} minutes
        </p>
        <Link to="/menu">Go check out some other food</Link>
      </div>
    </div>
  );
}

export default OrderConfirmPage;
