import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import fbLogo from "../Assets/Images/fbLogo.svg";
import twitterLogo from "../Assets/Images/twitterLogo.svg";
import dp from "../Assets/Images/ico.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Images/aicte.png";

const FbAccount = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const user = { name: "Rishit", role: "admin" };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex gap-[24vw] h-[100vh]"
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
            <p className="text-2xl font-extrabold tracking-wide">Facebook</p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
              <p>You are logged in as:</p>
            </div>
            <div>
              <div className="flex items-center px-8 w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl">
                <div className="flex flex-col">
                  <div className="flex gap-6">
                    <div>
                      <img src={dp} alt="dp" width={55} />
                    </div>
                    <div className="font-IBM-Sans">
                      <p className="text-lg capitalize font-IBM-Sans ">
                        {user.name}
                      </p>
                      <p
                        className="text-base capitalize font-IBM-Sans "
                        style={{ color: "#818181" }}
                      >
                        {user.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <a
                      href="/"
                      onClick={() => {
                        localStorage.removeItem("aicteuser");
                        navigate("/");
                      }}
                      className="underline text-[#A72314] font-IBM-Sans text-base font-semibold pl-48 "
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
            <p>Your Facebook pages</p>
          </div>

          <div className="flex gap-16">
            <div className="flex items-center px-4 w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl relative">
              <div className="flex gap-6">
                <div>
                  <img src={logo} alt="logo" width={80} />
                </div>
                <div className="flex flex-col gap-2 font-IBM-Sans text-base font-semibold">
                  <p>All India Council For Technical Education</p>
                </div>
              </div>

              <div>
                <a
                  href="/"
                  className="underline text-[#F0783B] font-IBM-Sans text-base font-semibold absolute bottom-[3vh] right-[3vh]"
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="flex items-center px-4 w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl relative ">
              <div className="flex gap-6">
                <div>
                  <img src={logo} alt="logo" width={60} />
                </div>
                <div className="font-IBM-Sans text-base font-semibold">
                  <p>Teachers council of India</p>
                </div>
              </div>
              <div>
                <a
                  href="/"
                  className="underline text-[#F0783B] font-IBM-Sans text-base font-semibold absolute bottom-[3vh] right-[3vh]"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FbAccount;
