import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
const Dashboard = () => {
  const links = ["menu", "dine"];
  return (
    <div className="h-screen border-2 solid  w-full ">
      <nav className="border-black border-2 h-[18%] flex items-center justify-between px-40">
        <div className="flex ">
          <NavLink className={"no-underline"}>
            <h1 className="h-full font-bold p-4 text-red-500 ">TFC</h1>
          </NavLink>
          {links.map((val, ind) => {
            return (
              <NavLink to={val} key={ind} className={"no-underline text-black text-sm font-medium h-full p-5"}>
                {val.toLocaleUpperCase()}
              </NavLink>
            );
          })}
        </div>
        <div className="flex ">
          <NavLink to={"signUp"} className={"no-underline text-black font-medium text-sm p-5"}>
          <div className="flex gap-5"> <MdAccountCircle className="size-6" />  <p className="font-bold">Account</p></div>
          </NavLink>
          <NavLink className={"flex text-black font-normal items-center"}>
            <TiShoppingCart className="w-20 h-8" />
          </NavLink>
        </div>
      </nav>
      <div className="h-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
