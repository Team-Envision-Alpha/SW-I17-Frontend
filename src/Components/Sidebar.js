/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import logo from "../Assets/Images/aicte.png";
import text from "../Assets/Images/logo_text.svg";
import React from "react";

import event from "../Assets/Images/Dashboard/upcoming.svg";
import activity from "../Assets/Images/Dashboard/activity.svg";
import editUser from "../Assets/Images/Dashboard/editUser.svg";
import report from "../Assets/Images/Dashboard/report.svg";
import user from "../Assets/Images/Dashboard/user.svg";
// import socialAnalytics from "../Assets/Images/Dashboard/socialAnalytics.svg";
import social from "../Assets/Images/Dashboard/social.svg";

import { Link } from "react-router-dom";
export default function Sidebar({ current, show, setShow }) {
  return (
    <div
      className={`${
        show ? "translate-x-0 " : "translate-x-[-100vw]"
      }  flex flex-col md:w-auto w-[100vw] align-middle h-[100vh] fixed overflow-y-scroll bg-white px-10 py-5 transition duration-500 z-30`}
      //   style={{ transform: show ? "translateX(0)" : "translateX(-100%)" }}
    >
      {/* <div className=""> */}
      <Link to="/dashboard">
        <img src={logo} className="w-[12vw] md:w-[8vw] mx-auto" alt="aicte" />
        <img
          src={text}
          className="w-[20vw] md:w-[12vw] mx-auto"
          alt="text aicte"
        />
      </Link>
      <div className="bg-[#00000050] my-6 h-[1px]" />
      <Link to="/dashboard">
        <p className="text-center font-bold">Dashboard</p>
      </Link>

      <div className="flex flex-col mt-5 justify-evenly ">
        <Link to="/invited_event">
          <div className="flex flex-row px-1 py-5">
            <img src={event} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Invited/Upcoming Events</p>
          </div>
        </Link>
        <Link to="/report_generation">
          <div className="flex flex-row px-1 py-5">
            <img src={report} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Report Generation</p>
          </div>
        </Link>
        <Link to="/activity_log">
          <div className="flex flex-row px-1 py-5">
            <img src={activity} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Activity Log</p>
          </div>
        </Link>

        <Link to="/user_registration">
          <div className="flex flex-row px-1 py-5">
            <img src={user} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Create User</p>
          </div>
        </Link>

        <Link to="/edituser">
          <div className="flex flex-row px-1 py-5">
            <img src={editUser} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Edit User</p>
          </div>
        </Link>

        <Link to="/social_media">
          <div className="flex flex-row px-1 py-5">
            <img src={social} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Social Media</p>
          </div>
        </Link>
        {/* <div className="flex flex-row px-1 py-5">
          <img src={socialAnalytics} className="w-[2vw]" />
          <p className="ml-4 my-auto ">Social Analytics</p>
        </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}
