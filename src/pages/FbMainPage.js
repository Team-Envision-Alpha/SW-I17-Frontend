import React from "react";
import bg from "../Assets/Images/Group.svg";
import fbCover from "../Assets/Images/fbCover.svg";
import tickIcon from "../Assets/Images/tickIcon.svg";
import msgIcon from "../Assets/Images/msgIcon.svg";
import redirect from "../Assets/Images/redirect.svg";
import fbLike from "../Assets/Images/fbLike.svg";
import fbHeart from "../Assets/Images/fbHeart.svg";
import logo from "../Assets/Images/aicte.png";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const FbMainPage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex gap-[24vw] h-[220vh]"
      >
        <div>
          <Navbar />
          <div className="md:hidden block absolute z-50">
            <Burger open={show} setOpen={setShow} />
          </div>
          <Sidebar show={show} setShow={setShow} />
        </div>

        <div className="flex flex-col gap-[6vh] w-[70vw]">
          <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
            <p className="text-2xl font-extrabold tracking-wide">Facebook</p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
              <p>All India Council For Technical Education</p>
            </div>
            <div className="flex flex-col ">
              <div className="w-full">
                <img src={fbCover} alt="cover" className="w-full" />
              </div>
              <div className="flex justify-between items-center p-2">
                <div className="flex gap-6 items-center">
                  <div className="w-[10vw] h-[20vh] rounded-full bg-white relative bottom-[4vh]">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="font-IBM-Sans relative bottom-[2vh]">
                    <div className="flex gap-2">
                      <p className="font-bold text-xl tracking-wide ">
                        All India Council for Technical Education
                      </p>
                      <img src={tickIcon} alt="tickIcon" />
                    </div>

                    <div className="flex gap-2 font-light text-[#65676B] font-IBM-Sans">
                      <p>
                        &#64;<span>aicteIndia</span>
                      </p>

                      <p className="text-[#65676B] text-3xl relative bottom-[2vh]">
                        .
                      </p>

                      <p>
                        ⭐<span>21 criticas</span>
                      </p>
                      <p className="text-[#65676B] text-3xl relative bottom-[2vh]">
                        .
                      </p>
                      <p>Organization</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 relative bottom-[2vh]">
                  <button className="font-IBM-Sans flex justify-center items-center gap-2 w-[20vw] bg-[#1877F2] text-white font-bold px-12 py-2 rounded-md">
                    <img src={msgIcon} alt="msgIcon" />
                    <p className="tracking-wide">Messages</p>
                  </button>
                  <div className="flex gap-2 justify-center  font-IBM-Sans">
                    <img src={redirect} alt="redirect" />
                    <p>aicte.com</p>
                  </div>
                </div>
              </div>
              <div className="border-b-2 border-b-[#CED0D4] relative bottom-[3vh]"></div>
            </div>

            {/* SEARCH FEATURE WILL BE IMPLEMENTED */}

            <div className="grid grid-cols-2 gap-6 font-IBM-Sans p-2">
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between font ">
                  <p className="text-xl font-bold">Sobre</p>
                  <p className="text-lg text-[#1877F2]">Ver tudo</p>
                </div>
                <div className="w-full h-[25vh]">
                  {/* MAP WILL COME HERE */}
                  <img src={fbCover} alt="fbCover" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-6 font-IBM-Sans">
                  <div className="flex gap-6">
                    <FaInfoCircle className="text-[#8C939D] text-3xl" />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, earum!
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <AiFillLike className="text-[#8C939D] text-3xl" />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, earum!
                    </p>
                  </div>

                  <div className="flex gap-6">
                    <MdLocationOn className="text-[#8C939D] text-3xl" />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, earum!
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <TbWorld className="text-[#8C939D] text-3xl" />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, earum!
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <BsFillTelephoneFill className="text-[#8C939D] text-2xl" />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, earum!
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <GrMail className="text-[#8C939D] text-2xl" />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, earum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[100vh] bg-[#FFFFFF] rounded-xl shadow-sm flex flex-col gap-2">
                {/* logo */}
                <div className="flex p-4 gap-4 items-center">
                  <div className="w-[4vw] h-[8vh] font-IBM-Sans">
                    <img src={logo} alt="logo" />
                  </div>
                  <div>
                    <p className="font-bold">AICTE</p>
                    <div className="flex items- gap-2">
                      <p className="text-[#65676B]">20 de janeiro</p>
                      <p className="text-[#65676B] text-3xl relative bottom-[2vh]">
                        .
                      </p>
                      <BiWorld className="text-[#65676B] text-xl" />
                    </div>
                  </div>
                </div>
                {/* post */}
                <div className="flex flex-col gap-6">
                  <div className="font-IBM-Sans text-base px-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore doloremque illum debitis ab nesciunt quod voluptate
                      saepe assumenda ipsam reiciendis?
                    </p>
                  </div>
                  {/* <div className="w-full h-[35vh]"> */}
                  <div className="w-full ">
                    <img src={fbCover} alt="cover" />
                  </div>
                  <div className="flex justify-between px-6 items-center">
                    <div className="flex gap-6">
                      <div className="flex">
                        <img src={fbLike} alt="fbLike" />
                        <img src={fbHeart} alt="fbHeart" />
                      </div>
                      <p className="text-[#65676B]">62</p>
                    </div>
                    <div className="flex gap-6 text-[#65676B] font-IBM-Sans">
                      <p>12 comments</p>
                      <p>2 shares</p>
                    </div>
                  </div>

                  <div className="border-b-2 border-b-[#CED0D4] mx-6"></div>
                </div>
                {/* comments */}
                <div className="font-IBM-Sans  p-6  flex flex-col gap-4">
                  <p className="text-[#65676B] font-bold text-lg">
                    View Comments
                  </p>
                  <div>
                    <div className="w-[16vw]  bg-[#F0F2F5] rounded-2xl">
                      <div className="p-4">
                        <p className="text-base ">Joana Almeida</p>
                        <p className="text-sm font-light">qwertynvhgcgf</p>
                      </div>
                    </div>
                    <div className="flex justify-around text-[#65676B] w-[16vw] text-sm">
                      <p className="font-bold">Like</p>
                      <p className="font-bold">Respond</p>
                      <p className="fontyt-light">10h</p>
                    </div>
                    <div className="flex p-4 items-center gap-2">
                      <div className="w-[3vw] h-[6vh]">
                        <img src={logo} alt="logo" />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="contact"
                          className="w-[24vw] px-4 py-2 outline-none"
                          style={{
                            color: "#818181",
                            background: "#f6f5f6",

                            borderRadius: "16px",
                          }}
                          placeholder="Comment"
                        />
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

export default FbMainPage;
