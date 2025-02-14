import { Link } from "react-router-dom";
import Input from "../../../components/ui/input/input";
import Lottie from "lottie-react";
import loginImg from "../../../assets/login.json";
export default function login() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-full lg:text-left">
          <Lottie animationData={loginImg} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center font-bold my-5">Login</h1>
          <div className="card-body">
            <fieldset className="fieldset">
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
              <button className="btn btn-neutral mt-4">Login</button>
              <div>
                <span>Do n&apos;t Have Any Account?</span>
                <Link to="/register" className="link link-hover">
                  Register
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
