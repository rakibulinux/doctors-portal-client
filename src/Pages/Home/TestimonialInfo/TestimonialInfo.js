import React from "react";

const TestimonialInfo = ({ testimonial }) => {
  const { imgUser, review, name, location } = testimonial;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review}</p>
      </div>
      <figure className="p-2">
        <img className="w-14 mr-2" src={imgUser} alt="Shoes" />
        <div>
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </figure>
    </div>
  );
};

export default TestimonialInfo;
