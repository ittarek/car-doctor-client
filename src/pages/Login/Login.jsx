import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import SocailLogin from "../SocailLogin/SocailLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // login function
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const loggedUser = { email: user.email };
        console.log(loggedUser);
      
        navigate(from, {replace:true});
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
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-[#FF3811] text-white"
                value="Sing In"
              />{" "}
              <p className="flex justify-center my-5">Or Sing in With</p>
              <div className="flex justify-center items-center">
                <button className="btn btn-outline ">FB</button>
                <button className="btn btn-outline mx-3">linkedin</button>
                <button className="btn btn-outline">google</button>
              </div>
            </div>
            <p className="flex justify-center">
              New to Car Doctor?{" "}
              <Link to="/signUp" className=" text-fuchsia-600">
                Sign UP
              </Link>
            </p>
            <SocailLogin></SocailLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
