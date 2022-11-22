import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots, price } = appointmentOption;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title text-secondary">{name}</h2>
        {/* <select name="" id="">
          {slots.map((slot, idx) => (
            <option key={idx} value={slot}>
              {slot.length ? slot : "Try Another day"}
            </option>
          ))}
        </select> */}

        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>

        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className="card-actions justify-end">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="my-modal"
            className="btn border-none rounded-md bg-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
