import React from "react";




const Loading = () => {

  return (
    <div className="w-screen bottom-0 h-screen left-0 right-0 absolute items-center bg-gray-500 bg-opacity-60">
      <div className="h-full flex justify-center items-center">
        <div className="flex gap-2  flex-row ">
          <div className="animate-bounce h-7 w-5 bg-red-500"></div>
          <div className="animate-spin  h-7 w-5 bg-red-500"></div>
          <div className="animate-bounce h-7 w-5 bg-red-500"></div>

        </div>
      </div>
    </div>
  );
};

export default Loading;
