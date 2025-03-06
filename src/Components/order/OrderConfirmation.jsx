// src/pages/OrderConfirmation.js
import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  return <h2 className="min-h-screen text-center py-10">Order Successful! Payment ID: {location.state.paymentId}</h2>;
};

export default OrderConfirmation;
