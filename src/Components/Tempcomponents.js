import React, { useEffect, useState } from "react";
import usericon from "../Assets/Images/usericon.png";
const Tempcomponent = ({ log }) => {
  const converttime = (timestamp) => {
    const time = new Date(timestamp).toLocaleDateString();
    return time;
  };
  return (
    <>
      <div className="p-4 rounded-xl bg-white shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
        <div className="flex gap-6 justify-center items-center">
          <div>
            <img src={usericon} alt="userReportIcon" width={50} />
          </div>
          <div>
            <div className=" grid grid-cols-2">
              <p className="col-1 text-base font-IBM-Sans font-bold text-orange-400">
                {log.user_name}
              </p>
              <p className="col-2 text-base font-IBM-Sans font-bold">
                {log.type}
              </p>
            </div>
            <p className="text-sm font-IBM-Sans">{log.message}</p>
            <div className=" grid grid-cols-6">
              <p className="col-start-1 col-end-3 text-sm font-IBM-Sans gap-4">
                jaipur
              </p>
              <p className="col-end-7 col-span-2 text-sm font-IBM-Sans text-gray-400">
                {converttime(log.timestamp)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tempcomponent;
