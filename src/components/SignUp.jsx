import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { sendOtpApi } from "../service/SignupService";
import { sendMail } from "../feature/SendEmailSlice";
import Loading from "./Loading";

const SignUp = () => {
  const navigator = useNavigate("/singUp/otp");
  const { loading, massage, error } = useSelector(
    (state) => state.SendMailSlice
  );
  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState("");
  const handleinput = (e) => {
    setEmailId(e.target.value);
  };
  const handleClick = async () => {
    try {
      const res = await dispatch(sendMail(emailId));
      navigator("/signUp/otp");
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <form className="flex justify-center">
      {loading && <Loading />}
      <div className="flex-col h-full flex gap-10 text-center  w-[30%]">
        <div>
          <h1 className="text-red-500 font-bold">TFC</h1>
        </div>
        <div>
          <h2>Let’s Sign In or Create account with your Email Id!</h2>
        </div>

        <input
          value={emailId}
          className="border-t-0 border-x-0 outline-none text-lg"
          onChange={handleinput}
          placeholder="Email Id"
          type="email"
        />
        <p>
          By “logging in to TFC”, you agree to our Privacy Policy and Terms &
          Conditions.
        </p>
        <div>
          {" "}
          <button
            type="button"
            onClick={handleClick}
            className="outline-none h-11 border-none bg-black rounded-3xl text-white w-[40%]"
          >
            {" "}
            Send Code
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
