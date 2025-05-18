import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Dine from "./components/Dine";
import SignUp from "./components/SignUp";
import Otp from "./components/Otp";
import AddFoodItems from "./components/employee/AddFoodItems";
import NewCustomer from "./components/NewCustomer";

const App = () => {
  const router = createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>,
        children:[
        {
          path:'menu',
          element:<Menu/>
        },
        {
          path:'dine',
          element:<Dine/>

        },
        {
          path:'signUp',
          element:<SignUp/>
        },
        {
          path:'signUp/otp',
          element:<Otp/>
        },
        {
          path:'newCustomer',
          element:<NewCustomer/>
        },
        {
          path:'addFoodItem',
          element:<AddFoodItems/>
        },
      ]
    }
]);
return(
<RouterProvider router={router}>
</RouterProvider>)
};
export default App;
