import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const handleDeleteDoctor = (doctor) => {
    console.log(doctor);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  if (isLoading) {
    return (
      <h1 className="text-3xl justify-center items-center"> Loading...</h1>
    );
  }
  return (
    <div>
      <h1>Manage Doctors</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>AVATAR</th>
                <th>NAME</th>
                <th>SPECIALTY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, idx) => (
                <tr key={doctor._id} className="hover">
                  <th>{idx + 1}</th>
                  <td className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn btn-xs text-white border-none bg-pink-700"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure do you want to delete this user`}
          message={`If you delete ${deletingDoctor.name} we will not be able to undo this`}
          closeModal={closeModal}
          handleDeleteDoctor={handleDeleteDoctor}
          modalData={deletingDoctor}
          deleteSuccessButton="Delete"
        />
      )}
    </div>
  );
};

export default ManageDoctors;
