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

const DashBoard = () => {
  // const user = JSON.parse(localStorage.getItem("aicteuser"));
  const user = { name: "Rishit", role: "admin" };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-[#f8f7f8] min-h-[100vh] bg-cover"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center my-10 gap-8 px-64">
        <div>
          <p className="text-[4vh] font-IBM-Sans font-extrabold capitalize">
            {user.role} Dashboard
          </p>
        </div>

        <div className="flex justify-center items-center gap-12  flex-wrap ">
          <a href="/events">
            <DashCard icon={calendar} name="Add Events" />
          </a>
          {user.role == "admin" ? (
            <DashCard icon={report} name="Generate Report" />
          ) : null}
          <a href="/venues">
            <DashCard icon={allvenues} name="View Venues" />
          </a>
          <a href="/requests">
            <DashCard icon={activity} name="User Requests" />
          </a>
          {user.role == "admin" ? (
            <a href="/user_registration">
              <DashCard icon={createuser} name="Create User" />
            </a>
          ) : null}
          {/* {user.role == "admin" ? (
            <a href="/edituser">
              <DashCard icon={createuser} name="Edit User" />
            </a>
          ) : null} */}
          {user.role == "admin" ? (
            <a href="/edituser">
              <DashCard icon={editUser} name="View/Edit Users" />
            </a>
          ) : null}
          {user.role == "admin" ? (
            <a href="/social_analytics">
              <DashCard icon={socialAnalytics} name="Social Analytics" />
            </a>
          ) : null}
          {user.role == "admin" ? (
            <a href="/social">
              <DashCard icon={social} name="Social Media" />
            </a>
          ) : null}
          <a href="/invited_event">
            <DashCard icon={Upcoming} name="Invited Events" />
          </a>
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
