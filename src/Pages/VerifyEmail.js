import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, sendOtp } from '../Service/Operation/Auth';

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const { loading, signupData } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="w-screen relative opacity-90 bg-[url('https://as1.ftcdn.net/v2/jpg/08/15/26/88/1000_F_815268898_hk8RX8rN2DejUCQxMrVzW0AwHnEggXez.jpg')] bg-cover min-h-screen overflow-hidden bg-richblack-900 text-white flex justify-center items-center">
      <div className="w-11/12 sm:w-9/12 md:w-2/3 lg:w-1/2 xl:w-1/3 border rounded-xl bg-opacity-30 bg-black backdrop-blur-lg backdrop-brightness-95 relative py-8 px-6 flex flex-col items-center">
        <div className="w-full mx-auto text-center mb-6">
          <h1 className="text-3xl font-semibold">Verify Email</h1>
          <p className="text-richblack-200 pt-3">
            A verification code has been sent to your email. Enter the code below:
          </p>
        </div>
        <div className="w-full flex justify-center">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="mx-2"></span>}
            renderInput={(props) => (
              <input
                {...props}
                // style={{ width: '3rem', height: '3rem' }}
                className="text-2xl w-20 h-10 sm:text-3xl max-md:w-6 rounded-md border border-richblack-200 text-center text-black bg-richblack-800"
              />
            )}
          />
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full bg-yellow-100 my-8 rounded-lg border text-black border-black bg-orange-500 p-2 text-lg md:text-xl font-bold font-sans hover:text-white transition-all duration-200"
        >
          Verify And Register
        </button>
        <div className="flex flex-row justify-between w-full px-6">
          <div className="text-white font-sans font-semibold">
            <Link
              to="/login"
              className="flex gap-3 items-center hover:underline cursor-pointer"
            >
              <FaArrowLeft />
              Back to login
            </Link>
          </div>
          <div
            onClick={() => {
              dispatch(sendOtp(signupData.email, navigate));
            }}
            className="text-white font-sans font-semibold hover:underline cursor-pointer"
          >
            <Link>Resend OTP</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
