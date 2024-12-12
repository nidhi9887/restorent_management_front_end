import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";


const Otp = () => {
  // const location = useLocation();
  // const emailId = location?.state || "";
  const navigator = useNavigate();
  const [otpValue, setOtpValue] = useState("");
  const handleOtpInput = (value) => {
    setOtpValue(value);
  };
  const handleSubmit = () => {};

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="flex-col h-full flex gap-4 text-center w-[30%]">
        <div>
          <h1 className="text-red-500 font-bold">TFC</h1>
        </div>
        <div>
          <h2>We Just Texted You</h2>
        </div>
        <p>Please enter the verification code we just sent to 917017434567</p>
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

        <p>Your code will expire in 0:48sec</p>
        <button className="border-none underline text-lg hover:cursor-pointer bg-white">
          resend the{" "}
        </button>
        <div>
          <button
            type="submit"
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
