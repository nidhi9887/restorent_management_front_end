import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { veryfyOtpApi } from "../service/SignupService";
import Alert from "./alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import { sendMail } from "../feature/SendEmailSlice";
import Loading from "./Loading";

const Otp = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState("");
  const [statusType,setStatusType]=useState("");
  const email = location.state || "";
  const dispatch = useDispatch();
  const { loading, } = useSelector((state) => state.SendMailSlice);
  const [count,setCount]=useState(0);
  const handleOtpInput = (value) => {
    setOtpValue(value);
  };
  
  const handleResendOtp = () => {
      const res = dispatch(sendMail(email));
     res.then((res)=>{
      res.payload.data.message && setError(res.payload.data.message);
      setStatusType(res.payload.data.type);
      setTimeout(() => {
        setError("");
        setStatusType("");
       }, 2000);
     });
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    async function veryfyotp() {
      try {
        const res = await veryfyOtpApi(otpValue);
        setError(res.data.message);
        setStatusType(res.data.type);
        if (res.data.type === 'success') {
            setTimeout(() => {
            setError("");
            setStatusType("");
            navigator("/newCustomer");
          }, 2000);
        }
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError("");
          setStatusType("");
        }, 2000);
      }
    }
    veryfyotp();
  };

  console.log(count);
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      {loading && <Loading />}
      <div className={`fixed w-auto top-0  ${error ? "block" : "hidden"}`}>
        <Alert type={statusType} message={error} error={error} />
      </div>
      <div className="flex-col h-full flex gap-4 text-center w-[30%]">
        <div>
          <h1 className="text-red-500 font-bold">TFC</h1>
        </div>
        <div>
          <h2>We Just Texted You</h2>
        </div>
        <p>Please enter the verification code we just sent to "{email}"</p>
        <button
          className="border-none underline text-lg bg-white hover:cursor-pointer"
          onClick={() => {
            navigator("/signUp");
          }}
        >
          Diffrent Email?
        </button>

        <div className="flex justify-center">
          <OtpInput
            value={otpValue}
            onChange={handleOtpInput}
            numInputs={4}
            renderSeparator={<span>&nbsp;</span>}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  width: "4rem",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  fontSize: "2rem",
                  textAlign: "center",
                  outline: "none",
                }}
              />
            )}
          />
        </div>

        <p>Your code will expire in {count}</p>
        <button type="button" onClick={handleResendOtp} className="border-none underline text-lg hover:cursor-pointer bg-white">
          resend Otp{" "}
        </button>
        <div>
          <button
            onClick={handleSubmit}
            type="button"
            className="outlinec-none h-11 border-none bg-black rounded-3xl hover:cursor-pointer text-white w-[40%]"
          >
            {" "}
            Send Me a Code{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Otp;
