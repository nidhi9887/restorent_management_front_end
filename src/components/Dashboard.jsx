import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
const Dashboard = () => {
  const links = ["menu", "dine"];
  return (
    <div className="h-screen border-2 solid  w-full ">
      <nav className="border-black border-2  h-[20%] bg-white flex items-center justify-around">
        <div className="flex ">
          <NavLink className={"no-underline"}>
            <h1 className="h-full p-4 text-red-500 ">TFC</h1>
          </NavLink>
          {links.map((val, ind) => {
            return (
              <NavLink to={val} key={ind} className={"no-underline h-full p-5"}>
                {val.toLocaleUpperCase()}
              </NavLink>
            );
          })}
        </div>
        <div className="flex h-[80">
          <NavLink to={"signUp"} className={"no-underline p-5"}>
            SIGN IN
          </NavLink>
          <NavLink className={"flex items-center"}>
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
