import React from "react";
import Icon_1 from "../Assets/Images/Icon1_Modal.svg";
import Icon_2 from "../Assets/Images/Icon2_Modal.svg";
import Icon_3 from "../Assets/Images/Icon3_Modal.svg";
import Icon_4 from "../Assets/Images/Icon4_Modal.svg";
import Icon_5 from "../Assets/Images/Icon5_Modal.svg";
import Icon_6 from "../Assets/Images/Icon6_Modal.svg";
import { ImCancelCircle } from "react-icons/im";

const EventModal = ({ setIsOpen }) => {
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
            <p className="text-[3vh] font-bold">Event Name</p>
          </div>
          <div className="grid grid-cols-2 gap-20 px-20">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[3vh] font-semibold">Description</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  impedit temporibus pariatur ex laudantium dignissimos dolorum
                  facere aut laboriosam sequi in sint voluptatibus veritatis
                  quia molestiae voluptatem quasi, tenetur dolor!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[3vh] font-semibold">Description</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Icon_1} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh]">Request Pending</p>
                  <p className="text-[#818181] text-[1.5vh] ">
                    Your request has been uploaded and pending for approval
                  </p>
                </div>
              </div>
              <div className="flex items center gap-2">
                <img src={Icon_2} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh]">Request Approved by Team Head</p>
                  <p className="text-[#818181] text-[1.5vh] -ml-3">
                    Your request has been approved by team head and pending for
                    approval from Venue head.
                  </p>
                </div>
              </div>
              <div className="flex items center gap-2">
                <img src={Icon_3} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh]">Approved by Venue Head</p>
                  <p className="text-[#818181] text-[1.5vh]">
                    Your request has been approved by venue head and pending for
                    social media details.
                  </p>
                </div>
              </div>
              <div className="flex items center gap-2">
                <img src={Icon_4} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh]">Social Detalis required</p>
                  <p className="text-[#818181] text-[1.5vh]">
                    Your social details are required to move further.
                  </p>
                </div>
              </div>
              <div className="flex items center gap-2">
                <img src={Icon_5} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh]">Food Detalis required</p>
                  <p className="text-[#818181] text-[1.5vh]">
                    Your social details are required to move further.
                  </p>
                </div>
              </div>
              <div className="flex items center gap-2">
                <img src={Icon_6} alt="icon_1" />
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[2vh]">Event registaration</p>
                  <p className="text-[#818181] text-[1.5vh]">
                    Event registration is complete.
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
