import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import qouteImg from "../../../assets/icons/quote.svg";
import TestimonialInfo from "../TestimonialInfo/TestimonialInfo";

const Testimonial = () => {
  const infoTestimonial = [
    {
      _id: 1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      imgUser: people1,
      name: "Winson Herry",
      location: "California",
    },
    {
      _id: 2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      imgUser: people2,
      name: "Winson Herry",
      location: "California",
    },
    {
      _id: 3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      imgUser: people3,
      name: "Winson Herry",
      location: "California",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h4 className="text-xl font-medium text-primary">Testimonial</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <img className="w-48" src={qouteImg} alt="" />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {infoTestimonial.map((testimonial) => (
          <TestimonialInfo key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
