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

        <div className="flex justify-center items-center gap-8 flex-wrap  ">
          <Link to="/events">
            <DashCard icon={frame1} name="Add New Event" />
          </Link>
          <Link to="/invited_event">
            <DashCard icon={frame3} name="Your Invited Events" />
          </Link>

          <Link to="/requests">
            <DashCard icon={frame2} name="Your Event Requests" />
          </Link>


          <Link to="/venues">
            <DashCard icon={frame4} name="View All Venues" />
          </Link>
          <Link to="/add_venue">
            <DashCard icon={frame5} name="Add New Venues" />
          </Link>
          <Link to="/venue_dashboard">
            <DashCard icon={frame6} name="View Venue Dashboard" />
          </Link>


          {user.role === "admin" ? (
            <Link to="/user_registration">
              <DashCard icon={frame7} name="Create New User" />
            </Link>
          ) : null}



          {user.role === "admin" ? (
            <Link to="/edituser">
              <DashCard icon={frame8} name="View/Edit Users" />
            </Link>
          ) : null}


          {user.role === "admin" || user.role === "social_media" ? (
            <Link to="/social_media">
              <DashCard icon={frame9} name="Social Media" />
            </Link>
          ) : null}

          <Link to="/chat">
            <DashCard icon={frame10} name="AICTE Chats" />
          </Link>

          <Link to="/mass_mailer">
            <DashCard icon={frame11} name="Mass Mailer" />
          </Link>

          <Link to="/meeting_room">
            <DashCard icon={frame12} name="Online Meeting Room" />
          </Link>

          <Link to="/activity_log">
            <DashCard icon={frame13} name="Portal Activity Log" />
          </Link>


          {user.role === "admin" ? (
            <Link to="/report">
              <DashCard icon={frame14} name="Generate Events Report" />
            </Link>
          ) : null}


          <Link to="/department_registration">
            <DashCard icon={frame15} name="Portal Activity Log" />
          </Link>



        </div>
      </div>

    </div>
  );
};

export default DashBoard;
