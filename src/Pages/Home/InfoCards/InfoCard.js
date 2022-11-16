import React from "react";

const InfoCard = ({ card }) => {
  const { icon, title, description, bgColor } = card;
  return (
    <div
      className={`card card-side sm:flex-col md:flex-row lg:flex-row shadow-xl ${bgColor}  text-white p-4`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
