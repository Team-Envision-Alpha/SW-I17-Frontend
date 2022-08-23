import React from "react";
import logo from "../Assets/Images/aicte.png";
import bg from "../Assets/Images/Group.svg";
import micIcon from "../Assets/Images/micIcon.svg";
import vidIcon from "../Assets/Images/vidIcon.svg";
import userMeet from "../Assets/Images/userMeet.svg";

const MeetingRoom = () => {
  return (
    <>
      <div
        className="px-10 py-4  flex flex-col gap-4 h-[100vh]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="text-4xl font-bold font-IBM-Sans tracking-wide">
            AICTE MEETING ROOM
          </p>
          <div className="flex items-center gap-4">
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-[3vw] h-[6vh] rounded-full"
              />
            </div>
            <div>
              <p className="font-bold text-lg">text</p>
              <p className="text-base text-[#65676B]">text</p>
            </div>
          </div>
        </div>

        {/* Main */}

        <div className="flex flex-wrap justify-center items-center gap-10">
          <div>
            <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm">
              {/* integ ref: video, if on  */}

              {/* if not */}

              {/* <div className="w-[5vw] h-[10vh] bg-white">
                <img src={userMeet} alt="userMeet" />
              </div> */}
            </div>
            <div className="bg-[#00000080] w-[5vw] rounded-bl-xl rounded-tr-xl relative bottom-7">
              <p className="text-white text-sm text-center py-1 ">text</p>
            </div>
          </div>
          <div>
            <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm">
              {/* video */}
            </div>
            <div className="bg-[#00000080] w-[5vw] rounded-bl-xl rounded-tr-xl relative bottom-7">
              <p className="text-white text-sm text-center py-1 ">text</p>
            </div>
          </div>
          <div>
            <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm">
              {/* video */}
            </div>
            <div className="bg-[#00000080] w-[5vw] rounded-bl-xl rounded-tr-xl relative bottom-7">
              <p className="text-white text-sm text-center py-1 ">text</p>
            </div>
          </div>
          <div>
            <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm">
              {/* video */}
            </div>
            <div className="bg-[#00000080] w-[5vw] rounded-bl-xl rounded-tr-xl relative bottom-7">
              <p className="text-white text-sm text-center py-1 ">text</p>
            </div>
          </div>
          <div>
            <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm">
              {/* video */}
            </div>
            <div className="bg-[#00000080] w-[5vw] rounded-bl-xl rounded-tr-xl relative bottom-7">
              <p className="text-white text-sm text-center py-1 ">text</p>
            </div>
          </div>
          <div>
            <div className="w-[25vw] h-[30vh] rounded-xl bg-[#DEDEDE80] shadow-sm">
              {/* video */}
            </div>
            <div className="bg-[#00000080] w-[5vw] rounded-bl-xl rounded-tr-xl relative bottom-7">
              <p className="text-white text-sm text-center py-1  ">text</p>
            </div>
          </div>
        </div>

        {/* Controls */}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-[3vw] h-[6vh] rounded-full"
              />
            </div>
            <div>
              <p className="font-bold text-lg">text</p>
              <p className="text-base text-[#65676B]">text</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-[4vw] p-4 bg-[#DEDEDE80] rounded-xl border-2 border-[#4B556380] flex items-center justify-center">
              <img src={micIcon} alt="micIcon" />
            </button>
            <button className="w-[4vw] p-4 bg-[#DEDEDE80] rounded-xl border-2 border-[#4B556380] flex items-center justify-center">
              <img src={vidIcon} alt="vidIcon" />
            </button>
          </div>
          <div>
            <button className="flex justify-center items-center p-4 rounded-xl font-IBM-Sans bg-[#EF4444] text-white">
              Leave Meeting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingRoom;
