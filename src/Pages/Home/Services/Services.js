import React from "react";
import Service from "../Service/Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
const Services = () => {
  const servicesInfo = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      icon: fluoride,
      description:
        "Fluoride treatment is knowen as a treeth treatment which can help you to protect your theeth.",
    },
    {
      _id: 2,
      title: "Cavity Filling",
      icon: cavity,
      description:
        "Cavity Filling is knowen as a treeth treatment which can help you to cleen your theeth.",
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      icon: whitening,
      description:
        "Teeth whitening is knowen as a treeth treatment which can help you to teeth whitening your theeth.",
    },
  ];
  return (
    <div>
      <div className="text-center mt-10">
        <h3 className="font-semibold text-xl text-primary">OUR SERVICES</h3>
        <h2 className="font-semibold text-3xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesInfo.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
