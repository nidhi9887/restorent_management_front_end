import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendMail } from "../feature/SendEmailSlice";
import Loading from "./Loading";
import { Validations } from "../validations/Validations";
import Alert from "./alert/Alert";
const SignUp = () => {
  const navigator = useNavigate("/singUp/otp");
  const dispatch = useDispatch();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailId, setEmailId] = useState("");
  const [message,setMessage]=useState("");
  const [statusType,setStatusType]=useState("");
  const { loading, massage }= useSelector(
    (state) => state.SendMailSlice
  );
  const handleinput = (e) => {
  setIsEmailValid(Validations.validateEmail(e.target.value?.toLowerCase()));
  setEmailId(e.target.value?.toLowerCase());
  };
  const handleClick = async () => {
    try {
      const res = await dispatch(sendMail(emailId));
      setMessage(res.payload.data.message);
      setStatusType(res.payload.data.type);
      setTimeout(()=>{
        setMessage("");
        navigator("/signUp/otp", { state: emailId });
      },2000)
     
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <form className="flex justify-center">
      <div className={`fixed top-0 mt-10 ${message?'':'hidden'}`}>
      <Alert message={message} type={statusType} ></Alert>
      </div>
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
        <p className={`${isEmailValid ? "hidden" : "text-red-500 text-sm"}`}>
          Email address is not valid. It should contain @gmail.com
        </p>

        <p>
          By “logging in to TFC”, you agree to our Privacy Policy and Terms &
          Conditions.
        </p>
        <div>
          {" "}
          <button
            type="button"
            disabled={!isEmailValid}
            onClick={handleClick}
            className={`outline-none h-11 border-none hover:bg-slate-800 bg-black rounded-3xl text-white w-[40%] `}
          >
            {" "}
            SEND CODE
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
