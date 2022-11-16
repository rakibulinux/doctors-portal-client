import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { loginUserAccount, loginWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);
  const { email, password } = userInfo;
  const handleLogin = (data) => {
    setUserInfo(data);
    loginUserAccount(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`Login success with Email: ${user?.displayName}`);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
  const resetPassword = (e) => {
    console.log(e);
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <button
                    onClick={resetPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none bg-primary">Login</button>
            </div>
            <p>
              New to Doctors Portal?{" "}
              <Link to="/register" className="text-secondary">
                Create new account
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

export default Login;
