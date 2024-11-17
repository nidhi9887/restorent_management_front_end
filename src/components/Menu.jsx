import React from "react";
import FoodItem from "./FoodItem";
import { IoSearchSharp } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="mx-20 flex h-full">
      <section className=" w-64 pt-10">
        <h1>TFC MENU</h1>
      </section>
      <div className="w-full overflow-auto scrollbar-hide rounded-xl">   
        <div className="h-7 rounded-2xl w-48 placeholder:font-bold m-5 flex justify-center items-center focus-within:border-orange-300 mt-20 border-solid">
        <IoSearchSharp />   

          <input type="search" placeholder="search our menu " className="border-none placeholder:text-black outline-none pl-2"  />
        </div>
        <div className="w-full h-[1.5px] bg-black"></div>
        <h1 className="pt-4 pl-4">ZINGER: BUY 1 GET 1</h1>
      <section className="w-full flex flex-wrap ">
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
      </section>

      </div>
   
    </div>
  );
};

export default Menu;
