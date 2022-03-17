import React from "react";
import Navbar from "../Components/Navbar";

const Venue = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col gap-10 font-IBM-Sans px-8 my-10">
          <div>
            <p className="text-[3vh] ">Book a Venue</p>
          </div>

          <form action="/">
            <div className="grid grid-rows-1 grid-cols-2 gap-6 px-12">
              <div className="grid-cols-1">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h4>Event Name</h4>
                    <input
                      type="text"
                      className="w-[30vw] p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#E0E0E0",
                        border: "2px solid grey",
                        borderRadius: "11.8px",
                      }}
                      placeholder="Text here"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4>Description</h4>
                    <textarea
                      type="text"
                      className="w-[30vw] p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#E0E0E0",
                        border: "2px solid grey",
                        borderRadius: "11.8px",
                      }}
                      placeholder="Text here"
                      rows={6}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4>Organiser</h4>
                    <input
                      type="text"
                      className="w-[30vw] p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#E0E0E0",
                        border: "2px solid grey",
                        borderRadius: "11.8px",
                      }}
                      placeholder="Text here"
                    />
                  </div>
                </div>
                <div className="grid-cols-1">
                  <div className="flex flex-col justify-center items-center">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Venue;
