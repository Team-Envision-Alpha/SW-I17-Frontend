import React from "react";
import logo from "../Assets/Images/aicte.png";
import { FaCircle } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { BsEmojiSmile, BsCamera } from "react-icons/bs";

const ChatSecTwo = () => {
  return (
    <>
      <div className="col-span-2 bg-white shadow-md rounded-2xl font-IBM-Sans h-fit">
        <div className=" flex flex-col gap-4 p-4">
          {/* header */}
          <div className="flex items-center gap-6">
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
          <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>

          {/* main_chat */}
          <div className="p-4 font-IBM-Sans text-base h-[50vh] overflow-y-scroll">
            <ul className="flex flex-col gap-6">
              {/* my msg */}
              <li className="flex flex-col gap-2 justify-center items-end ">
                <div className="text-white p-4 rounded-3xl bg-[#1DA1F2] w-[80%] text-base ">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, eaque.
                  </p>
                </div>

                <div className="flex items-center px-2 gap-2 text-[#1DA1F2]">
                  <span className="text-black">10:10 AM, Today</span>
                  <FaCircle />
                </div>
              </li>

              {/* other msg */}
              <li className="flex flex-col gap-2 justify-center items-start ">
                <div className=" p-4 rounded-3xl bg-[#E7E7E7] w-[80%] text-base ">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, eaque.
                  </p>
                </div>

                <div className="flex items-center px-2 gap-2 text-[#E7E7E7]">
                  <FaCircle />
                  <span className="text-black">10:10 AM, Today</span>
                </div>
              </li>
            </ul>
          </div>

          {/* msg input */}
          <div className="w-[100%] p-4 flex justify-between items-center bg-[#EFF6FCDE] rounded-3xl">
            <div className="flex gap-8 items-center">
              <button>
                <GrAttachment className="text-[#333333] text-xl" />
              </button>
              <textarea
                name="msg"
                id="msg"
                cols="55"
                rows="1"
                className="outline-none font-IBM-Sans text-base bg-transparent  "
                placeholder="Type your message"
              ></textarea>
            </div>
            <div className="flex items-center gap-4">
              <button>
                <BsEmojiSmile className="text-[#333333] text-xl" />
              </button>
              <button>
                <BsCamera className="text-[#333333] text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSecTwo;
