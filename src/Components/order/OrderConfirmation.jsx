// src/pages/OrderConfirmation.js
import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  return <h2>Order Successful! Payment ID: {location.state.paymentId}</h2>;
};

export default OrderConfirmation;
