/* eslint-disable no-unused-vars */

import React from "react";
import Icon_1 from "../Assets/Images/Icon1_Modal.svg";
import Icon_2 from "../Assets/Images/Icon2_Modal.svg";
import Icon_3 from "../Assets/Images/Icon3_Modal.svg";
import Icon_4 from "../Assets/Images/Icon4_Modal.svg";
import Icon_5 from "../Assets/Images/Icon5_Modal.svg";
import Icon_6 from "../Assets/Images/Icon6_Modal.svg";
import { ImCancelCircle } from "react-icons/im";

const EventModal = ({ setIsOpen, event }) => {
  function reqlevel(e) {
    if (e === "pending") {
      return 0;
    } else if (e === "teamhead") {
      return 1;
    } else if (e === "venuehead") {
      return 2;
    } else if (e === "social") {
      return 3;
    } else if (e === "food") {
      return 4;
    } else if (e === "complete") {
      return 5;
    } else {
      return -1;
    }
  }
  return (
    <>
      <div
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        className="w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 right-0"
      >
        <div className="relative w-[80vw] h-[85vh] rounded-lg flex flex-col gap-2  items-center bg-white font-IBM-Sans">
          <div className="absolute top-4 right-4">
            <ImCancelCircle
              className="text-black text-[4vh] cursor-pointer"
              onClick={() => {
                return setIsOpen(false);
              }}
            />
          </div>
          <div className="my-10">
            <p className="text-[3vh] font-bold">{event?.name}</p>
          </div>
          <div className="grid grid-cols-2 gap-20 px-20">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[3vh] font-semibold">Description</p>
              </div>
              <div>
                <p>{event?.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[3vh] font-semibold">Track</p>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={Icon_1} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh] text-left">Request Pending</p>
                  <p className="text-[#818181] text-[1.5vh] text-left">
                    Your request has been uploaded and pending for approval
                  </p>
                </div>
              </div>
              <div
                className="flex items center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 1 ? "null" : "grayscale(100%)"
                  }`,
                }}
              >
                <img src={Icon_2} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh] text-left">
                    Request Approved by Team Head
                  </p>
                  <p className="text-[#818181] text-[1.5vh] text-left">
                    {reqlevel(event?.status) >= 1
                      ? "Your request has been approved by team head and pending for approval from Venue head."
                      : null}
                  </p>
                </div>
              </div>
              <div
                className="flex items center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 2 ? "null" : "grayscale(100%)"
                  }`,
                }}
              >
                <img src={Icon_3} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh] text-left">Approved by Venue Head</p>
                  <p className="text-[rgb(129,129,129)] text-[1.5vh] text-left">
                    {reqlevel(event?.status) >= 1
                      ? " Your request has been approved by venue head and pending for social media details."
                      : null}
                  </p>
                </div>
              </div>
              <div
                className="flex items center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 3 ? "null" : "grayscale(100%)"
                  }`,
                }}
              >
                <img src={Icon_4} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh] text-left">
                    Social Detalis required
                  </p>
                  <p className="text-[#818181] text-[1.5vh] text-left">
                    Your social details are required to move further.
                  </p>
                </div>
              </div>
              <div
                className="flex items center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 4 ? "null" : "grayscale(100%)"
                  }`,
                }}
              >
                <img src={Icon_5} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh] text-left">Food Detalis required</p>
                  <p className="text-[#818181] text-[1.5vh] text-left">
                    Add Food Requirements are required to move further.
                  </p>
                </div>
              </div>
              <div
                className="flex items center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 5 ? "null" : "grayscale(100%)"
                  }`,
                }}
              >
                <img src={Icon_6} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh] text-left">Event registaration</p>
                  <p className="text-[#818181] text-[1.5vh] text-left">
                    {reqlevel(event?.status) >= 5
                      ? "Event registration is complete."
                      : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModal;
