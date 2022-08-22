/* eslint-disable no-unused-vars */

import React from "react";
import bg from "../Assets/Images/Group.svg";
import { BsCameraReels, BsCamera } from "react-icons/bs";
import { AiFillDashboard, AiOutlineDown } from "react-icons/ai";
import Button from "@mui/material/Button";
import activity from "../Assets/Images/Dashboard/activity.svg";
import calendar from "../Assets/Images/Dashboard/calendar.svg";
import editUser from "../Assets/Images/Dashboard/editUser.svg";
import report from "../Assets/Images/Dashboard/report.svg";
import socialAnalytics from "../Assets/Images/Dashboard/socialAnalytics.svg";
import createuser from "../Assets/Images/Dashboard/user.svg";
import Navbar from "../Components/Navbar";
import DashCard from "../Components/DashCard";
import Upcoming from "../Assets/Images/Dashboard/upcoming.svg";
import social from "../Assets/Images/Dashboard/social.svg";
import allvenues from "../Assets/Images/Dashboard/allvenues.svg";
import addvenues from "../Assets/Images/Dashboard/addvenue.svg";
import { Link } from "react-router-dom";
const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  // const user = { name: "Rishit", role: "admin" };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-[#f8f7f8] min-h-[100vh] bg-cover"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center my-10 gap-8 px-64 ">
        <div>
          <p className="text-[4vh] font-IBM-Sans font-extrabold capitalize">
            {user.role} Dashboard
          </p>
        </div>

        <div className="flex justify-center items-center gap-12  flex-wrap  ">
          <Link to="/events">
            <DashCard icon={calendar} name="Add Events" />
          </Link>
          <Link to="/invited_event">
            <DashCard icon={Upcoming} name="Invited Events" />
          </Link>
          <Link to="/venues">
            <DashCard icon={allvenues} name="View Venues" />
          </Link>
          <Link to="/add_venues">
            <DashCard icon={addvenues} name="Add Venues" />
          </Link>
          <Link to="/requests">
            <DashCard icon={activity} name="User Requests" />
          </Link>
          <Link to="/activity_log">
            <DashCard icon={activity} name="Activity Log" />
          </Link>
          {user.role === "admin" || user.role === "social_media" ? (
            <Link to="/social_media">
              <DashCard icon={social} name="Social Media" />
            </Link>
          ) : null}
          {user.role === "admin" ? (
            <DashCard icon={report} name="Generate Report" />
          ) : null}

          {user.role === "admin" ? (
            <Link to="/user_registration">
              <DashCard icon={createuser} name="Create User" />
            </Link>
          ) : null}

          {user.role === "admin" ? (
            <Link to="/edituser">
              <DashCard icon={editUser} name="View/Edit Users" />
            </Link>
          ) : null}

          {/* {user.role === "admin" ? (
            <Link to="/social_analytics">
              <DashCard icon={socialAnalytics} name="Social Analytics" />
            </Link>
          ) : null} */}
          {/* {user.role === "admin" ? (
            <Link to="/edituser">
              <DashCard icon={createuser} name="Edit User" />
            </Link>
          ) : null} */}
        </div>

        {/* <div  */}

        {/* </div> */}
        {/* <div className="flex flex-row my-5 gap-8 px-10 justify-center items-center mb-10">
       
      </div> */}
      </div>
    </div>
  );
};

export default DashBoard;
