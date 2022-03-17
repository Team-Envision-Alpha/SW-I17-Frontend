import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/Images/Group.svg";

const Venue = () => {
  return (
    <>
      <div className="h-full" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="flex flex-col gap-10 font-IBM-Sans px-8 my-10">
          <div>
            <p className="text-[3vh] ">Book a Venue</p>
          </div>

          <form action="/">
            <div className="grid grid-cols-2 gap-20 px-12">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h4>Event Name</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Description</h4>
                  <textarea
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    rows={6}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Organiser</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h4>Event Name</h4>
                  <div
                    className="w-full h-[40vh]"
                    style={{ background: "#ECEBEC", borderRadius: "8px" }}
                  >
                    Calendar
                  </div>
                </div>
                <div className="flex gap-6 text-black">
                  <div className="flex flex-col gap-4">
                    <h4>Event Name</h4>

                    <div>
                      <input
                        name="time"
                        list="time"
                        className="w-[20vw] p-4 outline-none"
                        style={{
                          background: "#ECEBEC",
                          borderRadius: "8px",
                          border: "2px solid grey",
                        }}
                      />
                      <datalist id="time">
                        <option value="1:00 PM - 3:00 PM">
                          1:00 PM - 3:00 PM
                        </option>
                        <option value="1:00 PM - 3:00 PM">
                          3:00 PM - 5:00 PM
                        </option>
                        <option value="1:00 PM - 3:00 PM">
                          5:00 PM - 7:00 PM
                        </option>
                        <option value="1:00 PM - 3:00 PM">
                          7:00 PM - 9:00 PM
                        </option>
                      </datalist>
                    </div>
                  </div>
                  <div>
                    <input name="country" list="states" placeholder="State" />
                    <datalist id="states">
                      <option value="1:00 PM - 3:00 PM">
                        1:00 PM - 3:00 PM
                      </option>
                      <option value="1:00 PM - 3:00 PM">
                        3:00 PM - 5:00 PM
                      </option>
                      <option value="1:00 PM - 3:00 PM">
                        5:00 PM - 7:00 PM
                      </option>
                      <option value="1:00 PM - 3:00 PM">
                        7:00 PM - 9:00 PM
                      </option>
                    </datalist>
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
