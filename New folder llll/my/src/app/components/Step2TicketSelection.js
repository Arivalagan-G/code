"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";

const Step2TicketSelection = () => {
  const workshops = ["React", "AI", "Cloud", "Security"];

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Ticket Type</label>
        <Field as="select" name="ticketType" className="w-full p-2 border rounded">
          <option value="">Select a ticket</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="VIP">VIP</option>
          <option value="Student">Student</option>
        </Field>
        <ErrorMessage
          name="ticketType"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label className="block font-medium">Workshops</label>
        <div className="space-y-1">
          {workshops.map((w) => (
            <label key={w} className="flex items-center gap-2">
              <Field type="checkbox" name="workshops" value={w} />
              {w}
            </label>
          ))}
        </div>
        <ErrorMessage
          name="workshops"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label className="block font-medium">Referral Code</label>
        <Field
          name="referralCode"
          type="text"
          placeholder="Enter if any"
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default Step2TicketSelection;
