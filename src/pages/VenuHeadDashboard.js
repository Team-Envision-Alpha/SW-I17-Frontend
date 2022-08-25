import React from "react";
// import bg from "../Assets/Images/Group.svg";

import calendar from "../Assets/Images/Dashboard/calendar.svg";
import approval from "../Assets/Images/Dashboard/approval.svg";

// import Navbar from "../Components/Navbar";
import DashCard from "../Components/DashCard";

const VenuHeadDashboard = () => {
  return (
    <>
      <div >
        {/* <Navbar /> */}
        <div className="flex flex-col justify-center items-start my-10 px-20   gap-20">
          <div className="mx-auto">
            <p className="text-[4vh]  font-IBM-Sans font-extrabold">
              Venue Head Dashboard
            </p>
          </div>

          <div className="flex  justify-start items-center  gap-20">
            <DashCard icon={calendar} name="Events" />
            <DashCard icon={approval} name="Approval for Events" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VenuHeadDashboard;
