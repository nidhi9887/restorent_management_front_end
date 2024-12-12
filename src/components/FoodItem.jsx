import React from "react";
import images from "../assets/assets";
import { TiShoppingCart } from "react-icons/ti";

const FoodItem = ({ props }) => {
  const base64Image = `data:image/png;base64,${props?.image?.toString(
    "base64"
  )}`;
  return (
    <div className="h-[38rem] w-[45%] ">
      <img
        src={base64Image}
        className="h-[70%] w-[100%] rounded-lg"
        alt="food image"
      />
      <div className=" pt-5 ">
        <h1 className="text-[16px] font-semibold pt-2">{props.itemName}</h1>
        <p className="pt-2">
          <img
            src={props.veg ? `${images.veg}` : `${images.non_veg}`}
            className="h-4 "
            alt=""
          />
          {props.veg ? " veg" : " non veg"}
        </p>
        <p className="font-bold pt-2 "> {props.price} ₹</p>
        <p className="font-light text-sm pt-2"> {props.description}</p>
        <div className="w-full flex justify-center p-2">
        <button className="h-9 w-36 rounded-3xl flex justify-center hover:bg-red-500 text-white items-center gap-2 no-underline border-none bg-red-600" type="button"> <span>add to cart</span> <TiShoppingCart/>  </button>

        </div>

      </div>
    </div>
  );
};

export default FoodItem;
