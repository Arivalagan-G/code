"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";

const Step3Payment = () => {
  const methods = ["Credit Card", "UPI", "PayPal"];

  return (
    <div className="space-y-4">
      <label className="block font-medium">Payment Method</label>
      <div className="space-y-2">
        {methods.map((m) => (
          <label key={m} className="flex items-center gap-2">
            <Field type="radio" name="paymentMethod" value={m} />
            {m}
          </label>
        ))}
      </div>
      <ErrorMessage
        name="paymentMethod"
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default Step3Payment;
