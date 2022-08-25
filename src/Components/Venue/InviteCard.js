import React, { useState } from "react";
import calendar from "../../Assets/Images/calendar.png";

const InviteCard = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-64 m-8 border-2 border-gray-400 bg-gray-100 shadow-lg shadow-gray-500/50">
        <div className="flex flex-row m-4 gap-4">
          <img src={calendar} alt="calendar" />
          <p className="font-bold"> Event Request</p>
        </div>
        <div>
          <p className="max-w-full mx-4 text leading-6 font-IBM-Sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <a
          href="/"
          className="underline text-red-600 font-bold py-1 mb-2 mt-2 px-2 float-right"
        >
          view Event
        </a>
      </div>
      <div className="w-64 m-8 border-2 border-gray-400 bg-gray-100 shadow-lg shadow-gray-500/50">
        <div className="flex flex-row m-4 gap-4">
          <img src={calendar} alt="calendar" />
          <p className="font-bold"> Event Request</p>
        </div>
        <div>
          <p className="max-w-full mx-4 text leading-6 font-IBM-Sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <a
          href="/"
          className="underline text-red-600 font-bold py-1 mb-2 mt-2 px-2 float-right"
        >
          view Event
        </a>
      </div>
      <div className="w-64 m-8 border-2 border-gray-400 bg-gray-100 shadow-lg shadow-gray-500/50">
        <div className="flex flex-row m-4 gap-4">
          <img src={calendar} alt="calendar" />
          <p className="font-bold"> Event Request</p>
        </div>
        <div>
          <p className="max-w-full mx-4 text leading-6 font-IBM-Sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <a
          href="/"
          className="underline text-red-600 font-bold py-1 mb-2 mt-2 px-2 float-right"
        >
          view Event
        </a>
      </div>
    </>
  );
};

export default InviteCard;