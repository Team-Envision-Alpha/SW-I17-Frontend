import React from "react";
import logo from "../Assets/Images/aicte.png";

const Chat = ({ title }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-[30vw] bg-white shadow-md rounded-2xl p-4 flex flex-col gap-4 font-IBM-Sans h-fit ">
          <div>
            <p className="text-xl font-bold">{title}</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-6">
              <div className="w-[3vw] h-[6vh] rounded-full">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <p className="font-bold text-lg">text</p>
                <p className="font-md text-[#65676B]">text</p>
              </div>
            </div>
            <div>
              <p className="text-lg font-light">text</p>
              <div className="rounded-full bg-red-600 w-[2vw] h-[4vh] text-white flex justify-center items-center">
                <p>4</p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-b-[#B4ABABA8] w-full px-4"></div>
        </div>

        <div className=" bg-white shadow-md rounded-2xl font-IBM-Sans flex flex-col gap-10 w-[38vw] h-fit ">
          <div className="p-4">
            <div className="flex items-center gap-6">
              <div className="w-[3vw] h-[6vh] rounded-full">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <p className="font-bold ">text</p>
                <p className="font-md text-[#65676B]">text</p>
              </div>
            </div>
            <div className="border-b-2 border-b-[#B4ABABA8] w-full pt-2"></div>
          </div>

          <div className="h-[50vh] overflow-scroll-y">
            <div className="w-[5vw] rounded-2xl bg-red-500 px-4 py-2 mx-4 fixed-right">
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
