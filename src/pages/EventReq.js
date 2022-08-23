
import React from "react";
import Navbar from "../Components/Navbar";
import Table from "../Components/Table";
import bg from "../Assets/Images/Group.svg";

const EventReq = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="my-10 flex flex-col gap-20 items-center justify-center">
          <div>
            <p className="font-bold text-[4vh] tracking-wide">Event Request</p>
          </div>
          <div>
            <Table status="View Status" statusHeader="Request Status" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventReq;
