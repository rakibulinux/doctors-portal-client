import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import hadderBgImg from "../../../assets/images/bg.png";
const Banner = () => {
  return (
    <div
      className="hero-content grid md:grid-cols-2 flex-col-reverse lg:flex-row"
      style={{
        background: `url(${hadderBgImg})`,
      }}
    >
      <div className="">
        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
        <p className="py-6">
          Find Ivf Doctor In India. Search Faster, Better & Smarter Now! Get
          Results for Ivf Doctor In India. Find Results from Multiple Sources.
          Discover Us Now! All the Answers. Multiple Sources Combined. Fast and
          Trusted. Simple in Use. Easy Access Information.
        </p>
        <button className="btn border-non bg-primary">Get Started</button>
      </div>
      <div className="">
        <img src={bannerImg} className="rounded-lg shadow-2xl" alt="" />
      </div>
    </div>
  );
};

export default Banner;
