import React from "react";
import doctorImg from "../../../assets/images/doctor.png";
import appointmentImg from "../../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <div className="hero my-32">
      <div
        className="hero-content pb-0 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex-col lg:flex-row"
        style={{
          background: `url(${appointmentImg})`,
          //   height: "533px",
        }}
      >
        <img
          src={doctorImg}
          className="relative top-0 rounded-lg shadow-2xl -mt-36"
          alt=""
        />
        <div className="ml-20 flex flex-col  sm:items-center md:items-center lg:items-start justify-center text-white  ">
          <p className="text-xl font-semibold text-primary">Appointment</p>
          <h1 className="text-4xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn border-none bg-primary my-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
