import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  const { createUserAccount, updateUserAccount, loginWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userInfo, setUserInfo] = useState({});
  const { name, photoURL, email, password } = userInfo;
  const [createdUserEmail, setCretedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }
  const handleRegister = (data) => {
    setUserInfo(data);
    createUserAccount(email, password)
      .then((result) => {
        const user = result.user;
        updateUserAccount(name, photoURL)
          .then(() => {
            toast.success("Profile updated");
            savedUser(name, email);
          })
          .catch((err) => {
            toast.error(err.message);
          });
        console.log(user);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // console.log(userInfo);
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(`Login success with google: ${user?.displayName}`);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const savedUser = (name, email) => {
    const user = { name, email };
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCretedUserEmail(email);
      });
  };

  // const verifyUserJWT = (email) => {
  //   fetch(`${process.env.REACT_APP_API_URL}/jwt?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.accessToken) {
  //         localStorage.setItem("accessToken", data.accessToken);
  //         navigate("/");
  //       }
  //     });
  // };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <h1 className="text-5xl text-center font-bold">Register now!</h1>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  {...register("photoURL", {
                    required: "Photo URL Is Require",
                  })}
                  type="text"
                  name="photoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <p className="text-red-500 my-3 pl-2" role="alert">
                    {errors.photoURL?.message}
                  </p>
                )}
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 7,
                      message: "Password must be 7 charecter or more",
                    },
                    pattern: {
                      value: /([A-Z].*[A-Z])/,
                      message: "Password should contain two upercase later",
                    },
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none bg-primary">Register</button>
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-secondary">
                Login
              </Link>
            </p>
          </form>
          <div className="divider">OR</div>
          <div className="flex justify-center mb-5 w-full mx-auto">
            <button
              onClick={handleGoogleLogin}
              className="btn w-10/12 bg-primary border-none"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
