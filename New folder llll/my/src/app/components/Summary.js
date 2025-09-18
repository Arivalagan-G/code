"use client";
import React from "react";

const Summary = ({ values, registrationId }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold mb-3">Registration Summary</h3>
      <p><strong>Registration ID:</strong> {registrationId}</p>
      <p><strong>Name:</strong> {values.firstName} {values.lastName}</p>
      <p><strong>Email:</strong> {values.email}</p>
      <p><strong>Phone:</strong> {values.phone}</p>
      <p><strong>Ticket:</strong> {values.ticketType}</p>
      <p><strong>Workshops:</strong> {values.workshops.join(", ") || "None"}</p>
      <p><strong>Payment:</strong> {values.paymentMethod}</p>
      <p><strong>Referral:</strong> {values.referralCode || "None"}</p>
    </div>
  );
};

export default Summary;
