"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";

const Step1PersonalInfo = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">First Name</label>
        <Field
          name="firstName"
          type="text"
          className="w-full p-2 border rounded"
        />
        <ErrorMessage
          name="firstName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label className="block font-medium">Last Name</label>
        <Field
          name="lastName"
          type="text"
          className="w-full p-2 border rounded"
        />
        <ErrorMessage
          name="lastName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <Field
          name="email"
          type="email"
          className="w-full p-2 border rounded"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <label className="block font-medium">Phone</label>
        <Field
          name="phone"
          type="text"
          className="w-full p-2 border rounded"
        />
        <ErrorMessage
          name="phone"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default Step1PersonalInfo;
