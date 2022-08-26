import React, { useState, useEffect } from "react";
import logo from "../Assets/Images/logo.svg";
import hands from "../Assets/Images/hands.svg";
import TourPage from "./Tourpage";
import { Link } from "react-router-dom";

const Welcome = () => {
 
  
  
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        {show ? (
          <>
 
            <div className="flex flex-col gap-4 items-center justify-center">
              <div>
                <img src={logo} alt="logo" className="w-[32vw] h-[15vh] " />
              </div>
              <div>
                <p className="font-bold text-[50px]">
                  {" "}
                  Welcome To The AICTE Portal
                </p>
              </div>
              <div>
                <img src={hands} alt="namaste" />
              </div>
              <div className="text-center">
                <p className="font-bold text-xl text-sky-600 mx-32 text-wrap">
                  {" "}
                  Our Objective is to{" "}
                  <span className="text-orange-400">Promote Quality </span>in
                  Technical Education,
                  <span className="text-orange-400"> Plan and Coordinate</span>{" "}
                  Development of Technical Education System,
                  <span className="text-orange-400">
                    {" "}
                    Regulate and Maintain
                  </span>{" "}
                  the Norms and Standards.
                </p>
              </div>
              <div>
                <p className="text-sky-600 font-bold text-lg">
                  {" "}
                  Have a look around in the portal!
                </p>
              </div>
              <div className="flex items-center justify-center gap-16">
                <Link to="/login">
                  <button class="p-2 w-32 bg-white text-red-600 border-red-600 hover:text-white hover:bg-red-600 border-2 font-bold rounded-lg h">
                    Log In
                  </button>
                </Link>
                <div>
                  <button
                    class="bg-green-700 p-2 w-32 text-white hover:bg-white hover:text-green-700 hover:border-2 hover:border-green-700 font-bold rounded-lg h"
                    onClick={() => setShow(false)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <TourPage />
          </>
        )}
      </div>
    </>
  );
};

export default Welcome;
