import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fbCover from "../Assets/Images/fbCover.svg";
import logo from "../Assets/Images/aicte.png";
import { MdLocationOn } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { BsCalendar3, BsBarChartLine, BsUpload } from "react-icons/bs";
import {
  AiOutlineFileGif,
  AiOutlinePicture,
  AiOutlineSmile,
  AiTwotoneHeart,
} from "react-icons/ai";

const TwitterMainPage = () => {
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
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>

        <div className="flex flex-col gap-[6vh]">
          <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
            <p className="text-2xl font-extrabold tracking-wide">Twitter</p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
              <p>All India Council for Technical Education</p>
            </div>
            <div className="flex flex-col  mx-[10vw]">
              {/* Cover */}
              <div>
                <div>
                  <img src={fbCover} alt="cover" className="w-full h-[40vh]" />
                </div>
              </div>

              {/* Description */}

              <div className="mx-4 flex flex-col  font-IBM-Sans relative bottom-[6vh] gap-4">
                <div className="w-[10vw] h-[20vh] rounded-full bg-white  mx-4">
                  <img src={logo} alt="logo" />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-xl">
                      All India Council for Technical Education
                    </p>
                    <p className="font-light text-[#5B7083]">
                      &#64;<span>aicte</span>
                    </p>
                  </div>

                  <div>
                    <button className="w-[10vw] p-2 border-2 border-[#1DA1F2] text-lg text-[#1DA1F2] rounded-3xl font-bold">
                      Messages
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-2">
                  <div>
                    <p className="text-lg">Government Organization</p>
                  </div>

                  <div className="flex gap-10 text-md text-[#5B7083] items-center">
                    <div className="flex items-center gap-2">
                      <MdLocationOn />
                      <p>Delhi</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsCalendar3 />
                      <p>Joined September 2011</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <p className="font-bold">
                      569{" "}
                      <span className="font-light text-[#5B7083]">
                        Following
                      </span>
                    </p>
                    <p className="font-bold">
                      72{" "}
                      <span className="font-light text-[#5B7083]">
                        Followers
                      </span>
                    </p>
                  </div>
                </div>

                {/* Tweets */}

                <div className="flex flex-col gap-4 my-4">
                  <div className="flex gap-3 items-center ">
                    <div className="w-[4vw] h-[8vh] rounded-full bg-white  mx-4">
                      <img src={logo} alt="logo" />
                    </div>
                    <input
                      className="text-lg text-[#5B7083] p-2 outline-none"
                      placeholder="What's happening? "
                    />
                  </div>

                  <div className="ml-28 flex justify-between items-center">
                    <button className="flex gap-4 text-2xl text-[#1DA1F2]">
                      <AiOutlinePicture />
                      <AiOutlineFileGif />
                      <BsBarChartLine />
                      <AiOutlineSmile />
                      <TbCalendarTime />
                    </button>

                    <div>
                      <button className="w-[6vw] p-2 border-2 bg-[#1DA1F2] text-lg text-white rounded-3xl font-bold">
                        Tweet
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center font-IBM-Sans">
                    <div>
                      <div className="w-[4vw] h-[8vh] rounded-full bg-white  mx-4">
                        <img src={logo} alt="logo" />
                      </div>
                      <div className="border-b-2 border-b-[#65676B] rotate-90 relative top-[30vh] right-[24vh] w-[60vh] "></div>
                    </div>

                    <div className=" relative right-[47vh]">
                      <div>
                        <p className="text-md text-[#5B7083] ">
                          <span className="font-bold text-black">aicte</span>{" "}
                          &#64;aicte{" "}
                          <span className="relative bottom-1">.</span> 23s
                        </p>
                        <p className="text-md">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="w-[50vw] h-[30vh] pl-[15vh]">
                      <img src={fbCover} alt="cover" />
                    </div>

                    <div>
                      <div className="w-[50vw] flex gap-28 pl-[16vh] items-center">
                        <div className="flex gap-4 text-[#5B7083]">
                          <button>
                            <FaRegComment className="text-lg" />
                          </button>
                          <p className="text-md">61</p>
                        </div>
                        <div className="flex gap-4 text-[#5B7083]">
                          <button>
                            <FaRetweet className="text-2xl" />
                          </button>
                          <p className="text-md">61</p>
                        </div>
                        <div className="flex gap-4 ">
                          <button>
                            <AiTwotoneHeart className="text-[#F4245E] text-lg" />
                          </button>
                          <p className="text-md text-[#F4245E] ">61</p>
                        </div>
                        <div className="flex gap-4 text-[#5B7083]">
                          <button>
                            <BsUpload className="text-lg" />
                          </button>
                          <p className="text-md">61</p>
                        </div>
                      </div>
                    </div>
                    <div className="pl-28">
                      <a href="/" className="text-md text-[#1DA1F2] ">
                        Show this thread
                      </a>
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

export default TwitterMainPage;
