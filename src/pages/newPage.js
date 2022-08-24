import React, { useEffect, useState } from "react";
import bg from "../Assets/Images/Group.svg";
// import Sidebar from "../Components/Sidebar";
// import Navbar from "../Components/Navbar";
//import calendar from "../Assets/Images/calendar.png";
import Invitedcard from "../Components/Invitedcard";
import RequestCard from "../Components/RequestCard";
import { gql, useQuery } from "@apollo/client";

const Activity = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-[#f8f7f8] min-h-[100vh] bg-cover"
      >
        {/* <Navbar />
        <Sidebar show={show} setShow={setShow} /> */}
        <div>
          <h2>Events Updates</h2>
        </div>
        <div className="pt-24 md:ml-[20vw] mb-10 flex flex-col gap-20  items-center justify-center">
          <div className="h-auto mx-10 bg-white justify-center w-auto border-t-[48px] border-red-400 rounded-2xl flex flex-wrap">
            <Invitedcard name="View"></Invitedcard>
          </div>
          <div className="h-auto my-10 mx-10 bg-white justify-center w-auto border-t-[48px] border-orange-300 rounded-2xl flex flex-wrap">
            <RequestCard name="View"></RequestCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
