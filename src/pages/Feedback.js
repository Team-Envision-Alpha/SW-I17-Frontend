import React, { useEffect, useState } from "react";
import bg from "../Assets/Images/Group.svg";
import Starrating from "../Components/Starcomponent";
import Test from "../Components/Test";
const Feedback = () => {
    
    return (
        <>
          <div style={{ backgroundImage: `url(${bg})` }}
           className="bg-[#f8f7f8] min-h-[100vh] bg-cover">
        
        <div className="flex flex-col justify-center gap-10 font-IBM-Sans px-8 py-10 md:ml-[28vw] lg:ml-[25vw]">
          <div>
            <p className="text-[3vh] font-IBM-Sans "> FEEDBACK</p>
          </div>
          <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10 mx-auto lg:mx-[5vw]">
            <form
              className="w-full h-full py-5 mt-5 bg-white px-10"
            >
              {/* <div className="grid grid-cols-2 gap-20 items-center justify-center px-40"> */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h4> Suggestions</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#F6F5F6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                  
                    placeholder="Text here"
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <h4>Rating 1</h4>
                {/*  <Starrating
                   name="rate2" 
                   editing={false}
                   renderStarIcon={() => <span></span>}
                  starCount={10}
                   value={rating}
                    />
                      */}
                      <Starrating />
                      <Test />
                    
                    
                </div> 
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
        
             </div>
            
            </>
           );
        };
export default Feedback;