import React from "react";
import { useParams } from "react-router-dom";

function PaymentPage() {
  const { paymentType } = useParams();

  return <div>Payment page for type: {paymentType}</div>;
}

export default PaymentPage;
