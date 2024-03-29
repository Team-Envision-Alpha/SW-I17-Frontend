import React from 'react';
import bg from '../Assets/Images/Group.svg';

import Navbar from '../Components/Navbar';
import EventCard from '../Components/EventCard';

const DashBoard = () => {
  
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        {/* <Navbar /> */}
        <div className="flex flex-row mt-5">
          <p className="px-10">Invited Events</p>
          <p className="px-10 font-bold decoration -[3px]">
            <span className="underline decoration-2 ...">Upc</span>oming Events
          </p>
        </div>
        <div className="container lg:px-20 mx-auto pb-20">
          <div className="justify-center items-center grid md:grid-cols-2 sm:grid-cols-1">
            <EventCard name="Register"></EventCard>
            <EventCard name="Register"></EventCard>
          </div>
          <div className="justify-center items-center grid md:grid-cols-2 sm:grid-cols-1">
            <EventCard name="Register"></EventCard>
            <EventCard name="Register"></EventCard>
          </div>
          <div className="justify-center items-center grid md:grid-cols-2 sm:grid-cols-1">
            <EventCard name="Register"></EventCard>
            <EventCard name="Register"></EventCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
