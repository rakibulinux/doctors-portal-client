import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bgContactImg from "../../../assets/images/appointment.png";
const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div
      className="text-center my-10"
      style={{
        background: `url(${bgContactImg})`,
        backgroundSize: "cover",
      }}
    >
      <h4 className="text-primary font-semibold">Contact US</h4>
      <h2 className="text-3xl font-semibold text-white">
        Stay connected with us
      </h2>

      <form
        className="flex flex-col gap-5 my-4 w-4/12 mx-auto"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <input
          className="py-3 rounded px-2"
          {...register("email")}
          placeholder="Your email"
        />
        <input
          className="py-3 rounded px-2"
          {...register("subject")}
          placeholder="Subject"
        />
        <textarea
          className="py-3 rounded px-2 h-32"
          {...register("aboutYou")}
          placeholder="About you"
        />
        <p>{data}</p>
        <div>
          <input
            className="py-2 px-3 font-semibold text-white text-center rounded cursor-pointer bg-primary w-20 mb-4"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
