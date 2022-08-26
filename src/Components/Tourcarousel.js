import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../Assets/Images/screen1.png";
import img2 from "../Assets/Images/screen2.png";
import img3 from "../Assets/Images/screen3.png";
import img4 from "../Assets/Images/screen4.png";
import img5 from "../Assets/Images/screen5.png";
import img6 from "../Assets/Images/screen6.png";
import img7 from "../Assets/Images/screen7.png";
import img8 from "../Assets/Images/screen8.png";
import img9 from "../Assets/Images/screen9.png";

const TourCarousel = () => {
  return (
    <>
     <div className="w-[100vw] h-[60vh] px-10">
     <Carousel
        autoPlay={true}
        showArrows={true}
        showStatus={true}
        infiniteLoop={true}
        interval={1000}
        
      >
        <div className="flex  items-center gap-10">
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img1} alt="img1" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans  font-bold  ">
              <p className="text-2xl text-[#F0783B]">Dashboard</p>
              <p className="text-lg text-[#005AAA]">
                To organize and plan your work.
              </p>
            </div>
          </div>
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img2} alt="img2" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans font-bold  ">
              <p className="text-2xl text-[#F0783B]">Mass Mail</p>
              <p className="text-lg text-[#005AAA]">
                To publisize announce to a larger audience.
              </p>
            </div>
          </div>
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img3} alt="img3" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans  font-bold  ">
              <p className="text-2xl text-[#F0783B]">AICTE Meet</p>
              <p className="text-lg text-[#005AAA]">
                Provides an online working space
              </p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-between items-center ">
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img4} alt="img1" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans font-bold  justify-center items-start">
              <p className="text-2xl text-[#F0783B]">Activity Log</p>
              <p className="text-lg text-[#005AAA]">
                Keep track of all the activities.
              </p>
            </div>
          </div>
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img5} alt="img2" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans font-bold  ">
              <p className="text-2xl text-[#F0783B]">Event Report Generation</p>
              <p className="text-lg text-[#005AAA]">
                To have a proper report of recent events
              </p>
            </div>
          </div>
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img6} alt="img3" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans font-bold  ">
              <p className="text-2xl text-[#F0783B]">AICTE Chat Room</p>
              <p className="text-lg text-[#005AAA]">
                To have a common and private messaging in one place.
              </p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-between items-center ">
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img7} alt="img1" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans  font-bold  justify-">
              <p className="text-2xl text-[#F0783B]">Social Media Post</p>
              <p className="text-lg text-[#005AAA]">
                To have one stop for allll of your social media activities and handles.
              </p>
            </div>
          </div>
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img8} alt="img2" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans  font-bold  justify-">
              <p className="text-2xl text-[#F0783B]">Approval System</p>
              <p className="text-lg text-[#005AAA]">
                For proper arrangements and convenienve of all the services and tasks.
              </p>
            </div>
          </div>
          <div className="h-[28vw] w-[30vw]  bg-white rounded-xl flex flex-col gap-4 items-center justify-start p-4 shadow-lg ">
            <div className="h-[24vw] w-[28vw]">
                            <img src={img9} alt="img3" className="px-4" />

            </div>
            <div className="flex flex-col gap-2 font-IBM-Sans  font-bold  justify- ">
              <p className="text-2xl text-[#F0783B]">In app notifications</p>
              <p className="text-lg text-[#005AAA]">
                To get updated from anywhere in the portal in one go 
              </p>
            </div>
          </div>
          
        </div>
       
      </Carousel>
     </div>
    </>
  );
};

export default TourCarousel;
