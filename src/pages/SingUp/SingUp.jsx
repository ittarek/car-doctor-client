import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        createUser = result.user;
        console.log(createUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-24 items-canter lg:flex-row">
        <div className="">
          <img src={img} alt="" />
        </div>
        <form
          onSubmit={handleSignUp}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-[#FF3811] text-white"
                value="Sing Up"
              />{" "}
            </div>
            <p className="flex justify-center">
              AllReady have an account?{" "}
              <Link to="/login" className=" text-fuchsia-600">
                Sign IN
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
