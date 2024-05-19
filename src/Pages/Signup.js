import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setSignupData } from "../Slice/authSlice";
import { sendOtp } from "../Service/Operation/Auth";

export const Signup = ({ setISLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const changeHandler = (event) => {
    setFormdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const signupData = { ...formData };
    dispatch(setSignupData(signupData));
    dispatch(sendOtp(formData.email, navigate));
    setFormdata({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1599148401012-60bd30ff1967?q=80&w=2250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="w-full backdrop-blur-sm backdrop-brightness-90 min-h-screen flex flex-col items-center md:flex-row-reverse">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-white p-6">
          <div className="w-full md:w-[500px] bg-white bg-opacity-10 backdrop-blur backdrop-brightness-110 p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-5">
              Join the millions learning to code with StudyNotion for free
            </h1>
            <p className="mb-5">
              Build skills for today, tomorrow, and beyond.
              <span className="text-caribbeangreen-400"> Education to future-proof your career.</span>
            </p>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="flex flex-col items-start w-full">
                  <span className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">First Name<sup className="text-gray-100">*</sup></span>
                  <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className="bg-richblack-800 text-black rounded-[0.5rem] p-[12px] w-full h-10 border-b border-b-richblack-200"
                  />
                </label>
                <label className="flex flex-col items-start w-full">
                  <span className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">Last Name<sup className="text-gray-100">*</sup></span>
                  <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    className="bg-richblack-800 text-black rounded-[0.5rem] p-[12px] w-full h-10 border-b border-b-richblack-200"
                  />
                </label>
              </div>
              <label className="flex flex-col items-start mt-4">
                <span className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">Email Address<sup className="text-gray-100">*</sup></span>
                <input
                  required
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  placeholder="Enter Email Address"
                  value={formData.email}
                  className="bg-richblack-800 text-black rounded-[0.5rem] p-[12px] w-full h-10 border-b border-b-richblack-200"
                />
              </label>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <label className="flex flex-col items-start w-full relative">
                  <span className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">Create Password<sup className="text-gray-100">*</sup></span>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.password}
                    className="bg-richblack-800 text-black rounded-[0.5rem] p-[12px] w-full h-10 border-b border-b-richblack-200"
                  />
                  <span
                    className="absolute right-3 top-[30px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />}
                  </span>
                </label>
                <label className="flex flex-col items-start w-full relative">
                  <span className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">Confirm Password<sup className="text-gray-100">*</sup></span>
                  <input
                    required
                    type={showPassword1 ? "text" : "password"}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    className="bg-richblack-800 text-black rounded-[0.5rem] p-[12px] w-full h-10 border-b border-b-richblack-200"
                  />
                  <span
                    className="absolute right-3 top-[30px] cursor-pointer"
                    onClick={() => setShowPassword1((prev) => !prev)}
                  >
                    {showPassword1 ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />}
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-yellow-100 text-black font-bold mt-5 w-full rounded-[8px] px-[10px] py-[10px] border-2 border-gray-950 hover:text-gray-700 duration-200"
              >
                Create Account
              </button>
              <div className="flex items-center my-4 gap-x-2">
                <div className="w-full h-[1px] bg-gray-700"></div>
                <p className="text-white font-medium leading-[1.375rem]">OR</p>
                <div className="w-full h-[1px] bg-gray-700"></div>
              </div>
              <button
                className="w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-4 hover:bg-gray-900 transition-all duration-100"
              >
                <FcGoogle />
                <p>Sign Up with Google</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
