import React from 'react';

const Step3Payment = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div>
      <label>Payment Method:</label>
      <div>
        {["Credit Card", "UPI", "PayPal"].map((p) => (
          <label key={p}>
            <input
              type="radio"
              name="payment"
              value={p}
              checked={paymentMethod === p}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            {p}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Step3Payment;
