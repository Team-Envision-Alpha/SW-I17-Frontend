import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import calIcon from "../Assets/Images/calIcon.svg";
import userReportIcon from "../Assets/Images/userReportIcon.svg";
import teleReportIcon from "../Assets/Images/teleReportIcon.svg";
import groupReportIcon from "../Assets/Images/groupReportIcon.svg";
import mailReportIcon from "../Assets/Images/mailReportIcon.svg";
import Icon3 from "../Assets/Images/Icon3_Modal.svg";
import DetailTable from "../Components/Detailtable";
import ReportResTable from "../Components/ReportResTable";

const Report = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex gap-[24vw] h-[200vh]"
      >
        <div>
          <Navbar />
          <div className="md:hidden block absolute z-50">
            <Burger open={show} setOpen={setShow} />
          </div>
          <Sidebar show={show} setShow={setShow} />
        </div>

        <div className="flex flex-col gap-[6vh]">
          <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
            <p className="text-2xl font-extrabold tracking-wide">
              Generated Report
            </p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-extrabold font-IBM-Sans text-2xl tracking-wide">
              <p>AICTE Event Report </p>
            </div>
           <div className="flex justify-center w-[70vw]">
           <div className="w-[60vw] px-6 py-10 bg-[#EBEBEB] flex flex-col gap-10 justify-center items-center">

            {/* header */}

            <div className="flex flex-col justify-center items-center gap-6  ">
              <p className="font-IBM-Sans font-extrabold text-3xl tracking-wide">Event Report</p>
            </div>

            <div className="border-b-2 border-b-[#B4ABABA8] w-full "></div>


            {/* main report */}

            <div className="grid grid-cols-2 gap-10 w-[55vw]">
              <div className="flex flex-col gap-10 justify-center  ">
                <div className="py-8 px-10 flex flex-col gap-6  justify-center bg-white rounded-xl shadow-xl ">
                  <div>
                    <p className="font-IBM-Sans text-xl font-extrabold">
                      Date and Time
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <img src={calIcon} alt="calIcon" width={50} />
                    </div>

                    <div className="font-IBM-Sans text-base font-bold">
                      <p>Date 1</p>
                      <p>Date 2</p>
                    </div>
                  </div>
                </div>

                <div className="py-8 px-10 flex flex-col justify-center gap-6 bg-white rounded-xl shadow-xl">
                  <div>
                    <p className="font-IBM-Sans text-xl font-extrabold">
                      Organized by
                    </p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={userReportIcon}
                        alt="userReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                      <p className="text-base font-IBM-Sans font-bold">
                        Chris Cornell
                      </p>
                      <p className="text-sm font-IBM-Sans">
                        Team Envision AICTE
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={teleReportIcon}
                        alt="teleReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                      <p className="font-IBM-Sans  text-base">
                        98765498765
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-IBM-Sans text-xl font-extrabold">
                      Capacity
                    </p>
                  </div>

                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={groupReportIcon}
                        alt="groupReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                      <p className="font-IBM-Sans text-base">
                        200 People
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col justify-center gap-6 ">
                  <div>
                    <p className="font-IBM-Sans text-xl font-extrabold">
                      Food Requirements
                    </p>
                  </div>
                  <div>
                    <DetailTable />
                  </div>
                </div>

                <div className=" flex flex-col justify-center gap-6 ">
                  <div>
                    <p className="font-IBM-Sans text-xl font-extrabold">
                      Catering Services
                    </p>
                  </div>
                  <div className="max-w-md bg-white border-2 border-black px-6 py-4 rounded-xl ">
                    <p className="font-IBM-Sans text-lg tracking-wider">SRM Catering Service - Chennai</p>
                  </div>
                </div>

              </div>

              {/* right-sec */}
              <div className="flex flex-col gap-10   ">
              <div className="py-8 px-10 flex flex-col justify-center gap-6 bg-white rounded-xl shadow-xl">
                  <div>
                    <p className="font-IBM-Sans text-xl font-extrabold">
                      Venue Details
                    </p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={Icon3}
                        alt="userReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                     
                      <p className="text-sm font-IBM-Sans max-w-[15vw]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus!
                      </p>
                    </div>
                  </div>


                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={mailReportIcon}
                        alt="mailReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                      <p className="font-IBM-Sans text-base">
                        xyz@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={teleReportIcon}
                        alt="teleReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                      <p className="font-IBM-Sans  text-base">
                        98765498765
                      </p>
                    </div>
                  </div>

              

                 

                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={groupReportIcon}
                        alt="groupReportIcon"
                        width={50}
                      />
                    </div>
                    <div>
                      <p className="font-IBM-Sans text-base">
                        200 People (Max)
                      </p>
                    </div>
                  </div>
                </div>


              

             

                <div className=" flex flex-col justify-center gap-6 ">
                  <div>
                    <p className="font-IBM-Sans text-xl font-extrabold">
                      Alloted Responsibilities
                    </p>
                  </div>
                  <div>
                    <ReportResTable/>
                  </div>
                </div>

               

              </div>
            </div>

        </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
