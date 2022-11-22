import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const imageHostKey = process.env.REACT_APP_IMG_BB_KEY;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  // console.log(userInfo);
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          toast.success("Image upload success");
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          console.log(doctor);
          // Update in database
          fetch("https://doctors-portal-server-nu-two.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success(`${data.name} New doctor added`);
              navigate("/dashboard/manage-doctors");
            });
        }
      });
  };

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-nu-two.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <h1 className="text-3xl justify-center items-center"> Loading...</h1>
    );
  }
  return (
    <div>
      <h2 className="text-3xl">Add Doctor</h2>
      <div>
        <form onSubmit={handleSubmit(handleAddDoctor)} className="card-body">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                {...register("specialty")}
                className="select select-bordered w-full mb-4"
              >
                {specialties.map((specialty) => (
                  <option
                    key={specialty._id}
                    name="specialty"
                    value={specialty.name}
                  >
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn border-none bg-primary">Add A Doctor</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
