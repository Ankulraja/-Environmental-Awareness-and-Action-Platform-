import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { login } from "../Service/Operation/Auth";

export const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(login(formData.email, formData.password, navigate));
  };

  return (
    <div className="w-screen min-h-screen bg-[url('https://images.unsplash.com/photo-1462143338528-eca9936a4d09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover text-white">
      <div className="w-full backdrop-blur-sm backdrop-brightness-50 min-h-screen flex flex-row max-lg:flex-col-reverse mx-auto justify-center items-center">
        <div className="w-full max-w-lg px-6 py-10 lg:py-0 lg:px-10 flex flex-col justify-center">
          <div className="w-full">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="my-5">
              Build skills for today, tomorrow, and beyond.{" "}
              <span className="text-caribbeangreen-200 italic">
                Education to future-proof your career.
              </span>
            </p>
          </div>
          <form onSubmit={submitHandler} className="w-full">
            <div className="flex flex-col gap-6">
              <label className="w-full flex flex-col items-start relative">
                <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                  Email Address <span className="text-red-500">*</span>
                </p>
                <input
                  type="email"
                  required
                  value={formData.email}
                  placeholder="Enter your Email"
                  onChange={changeHandler}
                  name="email"
                  className="bg-richblack-800 rounded-[0.5rem] text-black p-[12px] w-full h-10 border-b border-b-richblack-200"
                ></input>
              </label>
              <label className="relative w-full">
                <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
                  Password
                </p>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={changeHandler}
                  name="password"
                  className="bg-richblack-800 rounded-[0.5rem] text-black p-[12px] w-full h-10 border-b border-b-richblack-200"
                ></input>
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-[12px] right-3 hover:cursor-pointer ml-[10px]"
                >
                  {!showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </label>
              <div className="flex w-full text-blue-400 justify-end">
                <Link to="/forgotPassword" className="text-xs">
                  Forgot Password?
                </Link>
              </div>
              <div className="mt-[30px] flex justify-center">
                <p>
                  Don't have an account? No worries{" "}
                  <Link to="/signup" className="text-blue-400">
                    Register here
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="mb-[25px] bg-yellow-100 w-full text-black p-[3px] rounded-md text-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="w-full max-w-lg flex justify-center items-center py-10 lg:py-0">
          <div className="relative">
            <img
              className="w-[400px] h-80 rounded-[50%] shadow-[_0px_0px_2px_rgb(0,255,4)]"
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F2ZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="nature"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
