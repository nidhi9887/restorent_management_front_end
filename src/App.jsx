import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Dine from "./components/Dine";
import { SignatureKind } from "typescript";
import SignUp from "./components/SignUp";

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
          path:''
        }
       ]
    }
]);
   return(
     <RouterProvider router={router}>
        

    </RouterProvider>)
};

export default App;
