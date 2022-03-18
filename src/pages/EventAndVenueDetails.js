import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/Images/Group.svg";
import EventAndVenueTable from "../Components/EventAndVenueTable";

const EventAndVenueDetails = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="my-10 flex flex-col gap-12 items-center justify-center">
          <div>
            <p className="font-bold text-[4vh] tracking-wide">
              Event And Venue Details
            </p>
          </div>
          <div>
            <EventAndVenueTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventAndVenueDetails;
