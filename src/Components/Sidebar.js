/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import logo from "../Assets/Images/aicte.png";
import text from "../Assets/Images/logo_text.svg";
import React from "react";

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

// import socialAnalytics from "../Assets/Images/Dashboard/socialAnalytics.svg";
import social from "../Assets/Images/Dashboard/social.svg";

import { Link } from "react-router-dom";
export default function Sidebar({ current, show, setShow }) {
  return (
    <div
      className={`${
        !show ? "hidden " : " "
      }  flex flex-col md:w-[25vw] w-[100vw] align-middle h-[100vh] flxed overflow-y-scroll bg-white px-10 py-5 transition duration-500`}
    >
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
        <Link to="/events">
          <div className="flex flex-row px-1 py-5">
            <img src={frame1} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Add New Event</p>
          </div>
        </Link>
        <Link to="/invited_event">
          <div className="flex flex-row px-1 py-5">
            <img src={frame2} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Your Invited Events</p>
          </div>
        </Link>
        <Link to="/requests">
          <div className="flex flex-row px-1 py-5">
            <img src={frame3} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Your Event Requests</p>
          </div>
        </Link>

        <Link to="/venues">
          <div className="flex flex-row px-1 py-5">
            <img src={frame4} className="w-[2vw]" />
            <p className="ml-4 my-auto ">View All Venues</p>
          </div>
        </Link>

        <Link to="/add_venue">
          <div className="flex flex-row px-1 py-5">
            <img src={frame5} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Add New Venues</p>
          </div>
        </Link>

        <Link to="/venue_dashboard">
          <div className="flex flex-row px-1 py-5">
            <img src={frame6} className="w-[2vw]" />
            <p className="ml-4 my-auto ">View Venue Dashboard</p>
          </div>
        </Link>
        <Link to="/user_registration">
          <div className="flex flex-row px-1 py-5">
            <img src={frame7} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Create New User</p>
          </div>
        </Link>
        <Link to="/edituser">
          <div className="flex flex-row px-1 py-5">
            <img src={frame8} className="w-[2vw]" />
            <p className="ml-4 my-auto ">View/Edit Users</p>
          </div>
        </Link>
        <Link to="/social_media">
          <div className="flex flex-row px-1 py-5">
            <img src={frame9} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Social Media</p>
          </div>
        </Link>
        <Link to="/chat">
          <div className="flex flex-row px-1 py-5">
            <img src={frame10} className="w-[2vw]" />
            <p className="ml-4 my-auto ">AICTE Chats</p>
          </div>
        </Link>
        <Link to="/mass_mailer">
          <div className="flex flex-row px-1 py-5">
            <img src={frame11} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Mass Mailer</p>
          </div>
        </Link>
        <Link to="/meeting_room">
          <div className="flex flex-row px-1 py-5">
            <img src={frame12} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Online Meeting Room</p>
          </div>
        </Link>
        <Link to="/activity_log">
          <div className="flex flex-row px-1 py-5">
            <img src={frame13} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Portal Activity Log</p>
          </div>
        </Link>
        <Link to="/report">
          <div className="flex flex-row px-1 py-5">
            <img src={frame14} className="w-[2vw]" />
            <p className="ml-4 my-auto ">Generate Events Report</p>
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
