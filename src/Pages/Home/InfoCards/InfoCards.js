import React from "react";
import hour from "../../../assets/icons/clock.svg";
import market from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
  const cardInfo = [
    {
      _id: 1,
      title: "Opening Hours",
      icon: hour,
      description: "You can visit us from 8 AM to 5 PM",
      bgColor: "bg-primary",
    },
    {
      _id: 2,
      title: "Visit our location",
      icon: market,
      description: "Brooklyn, NY 10036, United States",
      bgColor: "bg-lastly",
    },
    {
      _id: 3,
      title: "Contact us now",
      icon: phone,
      description: "+000 123 456789",
      bgColor: "bg-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardInfo.map((card) => (
        <InfoCard key={card._id} card={card} />
      ))}
    </div>
  );
};

export default InfoCards;
