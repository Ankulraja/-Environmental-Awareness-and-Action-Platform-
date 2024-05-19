import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { login } from "../Service/Operation/Auth";
import { useDispatch } from "react-redux";

export const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(login(formData.email, formData.password, navigate));
    
  };

  return (
    <div className="w-screen min-h-screen bg-[url(https://images.unsplash.com/photo-1462143338528-eca9936a4d09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover text-white">
      <div className="w-full backdrop-blur-sm backdrop-brightness-50 min-h-screen flex flex-row max-lg:flex-col-reverse mx-auto justify-center items-center">
        <div className="w-1/2 pl-10 flex flex-col justify-center ">
          <div className="w-[400px]">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="my-5">
              Build skills for today, tomorrow, and beyond.{" "}
              <span className="text-caribbeangreen-200 italic">
                Education to future-proof your career.
              </span>
            </p>
          </div>
          <form onSubmit={submitHandler} className="w-[400px]">
            <div className="flex justify-between gap-2 flex-col">
              <label className="w-full flex flex-col items-start relative mt-1">
                <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
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
              <label className="relative w-full ">
                <p className="my-[10px]">Password</p>
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
              <div className=" flex w-full text-blue-400 justify-end">
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
        <div className="w-1/2 relative flex justify-center my-20 ">
          <div className="w-[480px] relative">
            <div className=" z-30 relative">
              <img
                className="w-[400px] h-80 rounded-[50%] shadow-[_0px_0px_2px_rgb(0,255,4)] "
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F2ZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="youtube"
              ></img>
            </div>
            {/* <img
              className="absolute w-full  left-[5%] top-[5%]"
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1711576419/UploadOnly/download_moc7dv.png"
              alt="youtube"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
