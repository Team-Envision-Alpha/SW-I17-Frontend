import React from "react";
import icon1 from "../Assets/Images/icon11.png";
import icon2 from "../Assets/Images/icon2.png";
import icon3 from "../Assets/Images/icon3.png";
import icon4 from "../Assets/Images/icon4.png";
import icon5 from "../Assets/Images/icon5.png";
import icon6 from "../Assets/Images/icon6.png";
import icon7 from "../Assets/Images/icon7.png";
import icon8 from "../Assets/Images/icon8.png";
import banquet from "../Assets/Images/banquet.png";
import Table from "../Components/Detailtable";
import { ImCancelCircle } from "react-icons/im";

const DetailModal = ({ setIsOpen, event }) => {
    function reqlevel(e) {
      if (e === "pending") {
        return 0;}
      else if (e === "teamhead") {
            return 1;}
            else{
                return -1;
            }
        }
        return(
            <>
        <div style={{ background: "rgba(0, 0, 0, 0.5)" }}
        className="w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 right-0">
         <div className="relative w-[80w] h-[85vh] rounded-lg flex flex-col gap-2 items-center bg-white font-IBM-Sans">
         <div className="absolute top-4 right-4">
            <ImCancelCircle
              className="text-black text-[4vh] cursor-pointer"
              onClick={() => {
                return setIsOpen(false);
              }}
            />
          </div>
          <div className="my-10">
            <p className="text-[3vh] font-bold">EVENT NAME DETAILS</p>
          </div>

          {/* LEFT SIDE */}
          <div className="grid grid-cols-2 gap-20 pz-20 overflow-scroll ">
          <div className="flex flex-col gap-6 ml-8">
              <div>
                <p className="text-[1.5vh] font-semibold">Date and Time</p>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon1} className="w-[2.5vw]" alt="icon11" />
                
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left">12 March 2022 (6:00AM - 12:00PM) </p>
                  <p className="text-[2vh] text-left">
                  15 March 2022 (6:00AM - 12:00PM)
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[1.5vh] font-semibold">Organized by </p>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon2} className="w-[2.5vw]" alt="icon_1" />
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left">Chris Cornell</p>
                  <p className="text-[2vh] text-left">
                  New Envision Alpha
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon3} className="w-[2.5vw]" alt="icon3" />
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left">9876454321</p>
                </div>
              </div>
              <div>
                <p className="text-[1.5vh] font-semibold">Requested capacity</p>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon4} className="w-[2.5vw]" alt="icon11" />
                
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left">200 People</p>
                </div>
              </div>
              <div>
                <p className="text-[1.5vh] font-semibold">Requested capacity</p>
              </div>
              <div>
             {<Table />}
            </div>
            <div>
                <p className="text-[1.5vh] font-semibold">Catering Service</p>
              </div>
              <div>
                <select className="border-gray-400 border-2 rounded-lg p-2 pr-10">
                    <option value="SRM"> SRM Catering services-Chennai</option>
                    <option value="chandigarh">Chandigarh catering</option>
                </select>
              </div>
          </div>
          
            {/*  right side    */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[1.5vh] font-semibold">Venue</p>
              </div>
              <div>
              <img src={banquet} className="pr-14" alt="banquet" />
             </div>
             
              <div className=" mr-1">
              <div className="flex flex-col gap-6">
            <div>
                <p className="font-bold mt-4 text-[1.5vh]"> Venue details</p>
            </div>
            <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon5} className="w-[2.5vw]" alt="icon11" />
                
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left text-wrap text leading w-[10vw]">Near Srinivasapuram Bus Stop, Grand Southern Trunk Road, Thailavaram, Guduvancheri </p>
                  
                </div>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon6} className="w-[2.5vw]" alt="icon11" />
                
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left">dinfhfymdskk </p>
                  
                </div>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon7} className="w-[2.5vw]" alt="icon11" />
                
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left">9876543210 </p>
                  
                </div>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
                <img src={icon8} className="w-[2.5vw]" alt="icon11" />
                
                <div className="flex flex-col justify-center items-start ml-4">
                  <p className="text-[2vh] text-left">250 People (Max) </p>
                  
                </div>
              </div>
              </div>
              </div>
              
              <div
                className="flex items-center gap-2"
                style={{
                  filter: `${
                    reqlevel(event?.status) >= 0 ? "grayscale(100%)" : null
                  }`,
                }}
              >
               <div>
               <button class="float-left ml-10 bg-white text-red-600 border-red-600 border-2 font-bold p-1 mt-2 rounded-lg h">decline</button>
               </div>
                
                <div className="ml-16">
                <button  class="hover:bg-green-700 text-white font-bold p-1 pb-2 mb-2 mt-2 px-2 rounded-lg h" style={{ backgroundColor: '#1F8B24' }}>accept</button>
                </div>
              </div>






          </div>


         </div>
         </div>
         </div>
            </>
        );
};
export default DetailModal;