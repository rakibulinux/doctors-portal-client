import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import hadderBgImg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      className="hero-content md:grid md:grid-cols-2 flex-col-reverse lg:flex-row my-5"
      style={{
        background: `url(${hadderBgImg})`,
      }}
    >
      <div className="">
        <div className="">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
      <div className="">
        <img src={bannerImg} className="rounded-lg shadow-2xl" alt="" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
