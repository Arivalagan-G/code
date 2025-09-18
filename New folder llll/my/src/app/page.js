"use client";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Step1PersonalInfo from "./components/Step1PersonalInfo";
import Step2TicketSelection from "./components/Step2TicketSelection";
import Step3Payment from "./components/Step3Payment";
import Summary from "./components/Summary";
import "./globals.css";
export default function Home() {
  const [step, setStep] = useState(1);
  const [registrationId, setRegistrationId] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ticketType: "",
    workshops: [],
    paymentMethod: "",
    referralCode: "",
  };

  const validationSchemas = [
    Yup.object({
      firstName: Yup.string().min(3, "At least 3 chars").required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email")
        .matches(/@mitrahsoft\.com$/, "Must use @mitrahsoft.com")
        .required("Required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Must be 10 digits")
        .required("Required"),
    }),
    Yup.object({
      ticketType: Yup.string().required("Please select a ticket"),
      workshops: Yup.array().min(1, "Select at least one workshop"),
    }),
    Yup.object({
      paymentMethod: Yup.string().required("Please select a payment method"),
    }),
  ];

  const handleSubmit = (values) => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setRegistrationId(`REG-${Date.now()}`);
      setStep(4);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-50 rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-6">
        Tech Conference Registration
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[step - 1]}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="space-y-6">
            {step === 1 && <Step1PersonalInfo />}
            {step === 2 && <Step2TicketSelection />}
            {step === 3 && <Step3Payment />}
            {step === 4 && <Summary values={values} registrationId={registrationId} />}

            {step < 4 && (
              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {step === 3 ? "Submit" : "Next"}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
