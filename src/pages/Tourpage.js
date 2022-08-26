import React, { useState } from "react";
import logo from "../Assets/Images/logo.svg";
import Tourcarousel from "../Components/Tourcarousel";
import {Link} from "react-router-dom"
const TourPage = () => {
  
  return (
    <>
      <div className="h-[100vh] flex flex-col gap-6 items-center justify-center px-16">
        <div>
          <img src={logo} alt="logo" className="w-[32vw] h-[15vh] " />
        </div>
        <div>
          <Tourcarousel />
        </div>
   
          <Link to="/login">
            <button className="float-left px-16 ml-10 bg-white text-green-700 border-green-700 border-2 font-bold p-1 mt-2 rounded-lg hover:bg-green-700 hover:text-white">
              Log In
              </button>
            </Link>
       
      
        </div>
      
    </>
  );
};
export default TourPage;
