import React from "react";
import images from "../assets/assets";

const FoodItem = ({ props }) => {
  console.log(props.image, "props.image");
  const base64Image = `data:image/png;base64,${props?.image?.toString(
    "base64"
  )}`;
  return (
    <div className="h-auto w-[50%] ">
      <img
        src={base64Image}
        className="h-[45%] w-[100%] pl-10 object-cover "
        alt="food image"
      />
      <div className="pl-10 pt-5 ">
        <h1 className="text-[16px] font-semibold pt-2">{props.itemName}</h1>
        <p className="pt-2">
          <img
            src={props.veg ? `${images.veg}` : `${images.non_veg}`}
            className="h-4 "
            alt=""
          />
          {props.veg ? " veg" : " non veg"}
        </p>
        <p className="font-bold pt-2 ">{props.description}</p>
        <p className="font-light text-sm pt-2">{props.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
