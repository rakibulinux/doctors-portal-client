import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Exceptional from "../Exceptional/Exceptional";
import Appointment from "../Appointment/Appointment";
import Testimonial from "../Testimonial/Testimonial";
import ContactForm from "../ContactForm/ContactForm";
const Home = () => {
  return (
    <div className="my-10 gap-10">
      <Banner />
      <InfoCards />
      <Services />
      <Exceptional />
      <Appointment />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default Home;
