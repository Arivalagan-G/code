import React from "react";

const Summary = ({ registrationId, personal, ticketType, workshops, paymentMethod, referralCode }) => {
  return (

  <div className="summary">
    <h3>Registration Summary</h3>
    <p><strong>Registration ID = </strong>{registrationIdRef.current}</p>
    <p><strong>Name = </strong>{formData.firstName} {formData.lastName}</p>
    <p><strong>Email = </strong>{formData.email}</p>
    <p><strong>Phone = </strong>{formData.phone}</p>
    <p><strong>Ticket = </strong>{formData.ticketType}</p>
    <p><strong>Workshops = </strong>{formData.workshops.join(", ")}</p>
    <p><strong>Payment = </strong>{formData.paymentMethod}</p>
    <p><strong>Referral = </strong>{referralCode}</p>
  </div>


  );
};

export default Summary;
