import React from 'react';
import bg from '../Assets/Images/Group.svg';

import Navbar from '../Components/Navbar';
import DashCard from '../Components/DashCard';

const DashBoard = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="flex justify-center items-center mt-10">
        <div>
          <p className="text-[3vh] font-IBM-Sans font-extrabold">
            Main Admin Dashboard
          </p>
        </div>
      </div>
      <div className="flex flex-row my-5 gap-8 px-10 justify-center items-center">
        <DashCard></DashCard>
        <DashCard></DashCard>
        <DashCard></DashCard>
      </div>
      <div className="flex flex-row my-5 gap-8 px-10 justify-center items-center mb-10">
        <DashCard></DashCard>
        <DashCard></DashCard>
        <DashCard></DashCard>
      </div>
    </div>
  );
};

export default DashBoard;
