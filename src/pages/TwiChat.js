import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import Chat from "../Components/Chat";

const TwiChat = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex gap-[24vw] h-[120vh]"
      >
        <div>
          <Navbar />
          <div className="md:hidden block absolute z-50">
            <Burger open={show} setOpen={setShow} />
          </div>
          <Sidebar show={show} setShow={setShow} />
        </div>

        <div className="flex flex-col gap-[8vh]">
          <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
            <p className="text-2xl font-extrabold tracking-wide">Twitter</p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
              <p>All India Council for technical Education</p>
            </div>
            <div>
              <Chat title={"Twitter Chats"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwiChat;
