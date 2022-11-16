import React from "react";

const AppointmentModal = ({ treatment, setTreatment, date }) => {
  const { name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBooking}>
            <input
              disabled
              type="text"
              name="date"
              value={date}
              className="mt-4 input input-bordered w-full"
            />
            <select name="slot" className="mt-4 select select-bordered w-full">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot.length ? slot : "Try Another day"}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-4 input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone"
              className="mt-4 input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="mt-4 input input-bordered w-full"
              required
            />
            <div className="modal-action">
              <input
                className="btn bg-primary border-none w-full"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
