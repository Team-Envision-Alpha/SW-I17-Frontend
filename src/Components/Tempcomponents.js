import React, { useEffect, useState } from "react";
import usericon from "../Assets/Images/usericon.png";
const Tempcomponent = () => {
return (
    <>
                   <div className=" hover:shadow-xl p-4 hover:rounded-xl">
                  <div className="flex gap-6 justify-center items-center">
                    <div>
                      <img
                        src={usericon}
                        alt="userReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                    <div className=" grid grid-cols-2">
                      <p className="col-1 text-base font-IBM-Sans font-bold text-orange-400">
                        Chris Cornell
                      </p>
                      <p className="col-2 text-base font-IBM-Sans font-bold">
                        -Venue Head
                      </p>
                      </div>
                      <p className="text-sm font-IBM-Sans">
                       Added new venue to the events
                      </p>
                      <div className=" grid grid-cols-6">
                      <p className="col-start-1 col-end-3 text-sm font-IBM-Sans gap-4">
                        jaipur
                      </p>
                      <p className="col-end-7 col-span-2 text-sm font-IBM-Sans text-gray-400">  5 mins ago</p>
                      </div>
                      
                    </div>
                  </div>
                  </div>
                  
     </>
);
};
export default Tempcomponent;
