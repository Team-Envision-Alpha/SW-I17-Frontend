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
import user from "../Assets/Images/Dashboard/user.svg";
import Navbar from "../Components/Navbar";
import DashCard from "../Components/DashCard";

const DashBoard = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="flex flex-col justify-center items-center my-10 gap-10 px-72">
        <div>
          <p className="text-[4vh] font-IBM-Sans font-extrabold">
            Main Admin Dashboard
          </p>
        </div>

        <div className="flex justify-center items-center gap-12  flex-wrap ">
          <a href="/events">
            <DashCard icon={calendar} name="Add Events" />
          </a>
          <DashCard icon={report} name="Generate Report" />
          <DashCard icon={activity} name="Activity" />
          <a href="/user_registration">
            <DashCard icon={user} name="Create User" />
          </a>
          <DashCard icon={editUser} name="Edit User" />
          <DashCard icon={socialAnalytics} name="Social Analytics" />
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
