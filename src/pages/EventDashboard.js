/* eslint-disable no-unused-vars */

import React, { Suspense } from "react";
import bg from "../Assets/Images/Group.svg";
import { BsCameraReels, BsCamera } from "react-icons/bs";
import { AiFillDashboard, AiOutlineDown } from "react-icons/ai";
import Button from "@mui/material/Button";
import frame1 from "../Assets/Dashboardicons/Dashboard Icons/frame1.png"
import frame2 from "../Assets/Dashboardicons/Dashboard Icons/frame2.png"
import frame3 from "../Assets/Dashboardicons/Dashboard Icons/frame3.png"
import frame4 from "../Assets/Dashboardicons/Dashboard Icons/frame4.png"
import frame5 from "../Assets/Dashboardicons/Dashboard Icons/frame5.png"
import frame6 from "../Assets/Dashboardicons/Dashboard Icons/frame6.png"
import frame7 from "../Assets/Dashboardicons/Dashboard Icons/frame7.png"
import frame8 from "../Assets/Dashboardicons/Dashboard Icons/frame8.png"
import frame9 from "../Assets/Dashboardicons/Dashboard Icons/frame9.png"
import frame10 from "../Assets/Dashboardicons/Dashboard Icons/frame10.png"
import frame11 from "../Assets/Dashboardicons/Dashboard Icons/frame11.png"
import frame12 from "../Assets/Dashboardicons/Dashboard Icons/frame12.png"
import frame13 from "../Assets/Dashboardicons/Dashboard Icons/frame13.png"
import frame14 from "../Assets/Dashboardicons/Dashboard Icons/frame14.png"
import frame15 from "../Assets/Dashboardicons/Dashboard Icons/frame15.png"
import Navbar from "../Components/Navbar";
import DashCard from "../Components/DashCard";
import { Link } from "react-router-dom";
const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  // const user = { name: "Rishit", role: "admin" };
  return (

    <div

      className="min-h-[100vh] bg-cover"
    >

      <Navbar />
      <div className="flex flex-col justify-center items-center px-20 gap-8">
        <div>
          <p className="text-[6vh] font-IBM-Sans font-extrabold capitalize">
            {user.role} Dashboard
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap  h-[70vh] w-[60vw]">
          <Link to="/events">
            <DashCard icon={frame1} name="Add New Event" />
          </Link>
          <Link to="/invited_event">
            <DashCard icon={frame3} name="Your Invited Events" />
          </Link>

          <Link to="/requests">
            <DashCard icon={frame2} name="Your Event Requests" />
          </Link>





        </div>
      </div>

    </div>
  );
};

export default DashBoard;
