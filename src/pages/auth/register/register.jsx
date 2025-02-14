import { Link } from "react-router-dom";
import Input from "../../../components/ui/input/input";
import Lottie from "lottie-react";
import DotLottieReact from "../../../assets/register.json";

export default function register() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-full lg:text-left">
          <Lottie animationData={DotLottieReact} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center my-5">
            <h1 className="text-2xl font-bold">Register</h1>
          </div>
          <div className="card-body">
            <fieldset className="fieldset">
              <Input label="Name" placeholder="Enter Your Name" type="text" />
              <Input
                label="Email"
                placeholder="Enter Your E-mail"
                type="email"
              />
              <Input
                label="Password"
                placeholder="Enter Your Password"
                type="password"
              />
              <div>
                <Link className="link link-hover">Forgot password?</Link>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
              <div>
                <span>Already Have an Account?</span>
                <Link to="/login" className="link link-hover">
                  Login
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
