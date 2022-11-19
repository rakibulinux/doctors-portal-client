import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const AppointmentModal = ({ treatment, setTreatment, date, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name: treatmentName, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking success");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{treatmentName}</h3>
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
              defaultValue={user?.displayName}
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-4 input input-bordered w-full"
              disabled
            />
            <input
              defaultValue={user?.email}
              type="email"
              name="email"
              placeholder="Your email"
              className="mt-4 input input-bordered w-full"
              required
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone"
              className="mt-4 input input-bordered w-full"
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
