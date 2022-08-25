/* eslint-disable no-unused-vars */

import React, { Suspense } from "react";
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
            <DashCard icon={calendar} name="Add New Event" />
          </Link>
          <Link to="/invited_event">
            <DashCard icon={Upcoming} name="Your Invited Events" />
          </Link>

          <Link to="/requests">
            <DashCard icon={activity} name="Your Event Requests" />
          </Link>


          <Link to="/venues">
            <DashCard icon={allvenues} name="View All Venues" />
          </Link>
          <Link to="/add_venue">
            <DashCard icon={addvenues} name="Add New Venues" />
          </Link>
          <Link to="//venue_dashboard">
            <DashCard icon={addvenues} name="View Venue Dashboard" />
          </Link>


          {user.role === "admin" ? (
            <Link to="/user_registration">
              <DashCard icon={createuser} name="Create New User" />
            </Link>
          ) : null}



          {user.role === "admin" ? (
            <Link to="/edituser">
              <DashCard icon={editUser} name="View/Edit Users" />
            </Link>
          ) : null}


          {user.role === "admin" || user.role === "social_media" ? (
            <Link to="/social_media">
              <DashCard icon={social} name="Social Media" />
            </Link>
          ) : null}

          <Link to="/chat">
            <DashCard icon={calendar} name="AICTE Chats" />
          </Link>

          <Link to="/mass_mailer">
            <DashCard icon={calendar} name="Mass Mailer" />
          </Link>

          <Link to="/meeting_room">
            <DashCard icon={calendar} name="Online Meeting Room" />
          </Link>

          <Link to="/activity_log">
            <DashCard icon={activity} name="Portal Activity Log" />
          </Link>


          {user.role === "admin" ? (
            <Link to="/report">
              <DashCard icon={report} name="Generate Events Report" />
            </Link>
          ) : null}






        </div>
      </div>

    </div>
  );
};

export default DashBoard;
