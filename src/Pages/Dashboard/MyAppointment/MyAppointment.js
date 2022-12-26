import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `${process.env.REACT_APP_API_URL}/bookings?email=${user?.email}`;
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Lodding...</h1>;
  }
  return (
    <div>
      <h1 className="text-3xl">MyAppointment</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>PatientName</th>
                {/* <th>Email</th>
                <th>Phone</th> */}
                <th>Treatment Name</th>
                <th>Appointment Date</th>
                <th>Time</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings &&
                bookings.map((booking, idx) => (
                  <tr key={booking._id} className="hover">
                    <th>{idx + 1}</th>
                    <td>{booking.patient}</td>
                    {/* <td>{booking.email}</td>
                  <td>{booking.phone}</td> */}
                    <td>{booking.treatment}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.slot}</td>
                    <td>
                      {booking.price && !booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn bg-primary btn-sm">Pay</button>
                        </Link>
                      )}
                      {booking.price && booking.paid && (
                        <span className="text-green-500 font-bold">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
