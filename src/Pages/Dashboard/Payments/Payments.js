import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PB_KEY);

const Payments = () => {
  const booking = useLoaderData();
  const { appointmentDate, treatment, patient, slot, email, phone, price } =
    booking;

  return (
    <div>
      <h1 className="text-3xl">Payment for {treatment}</h1>
      <p className="text-xl my-4">
        Please pay <span className="font-bold">${price}</span> for your
        appointment on {appointmentDate}
      </p>
      <div className="w-96 my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
