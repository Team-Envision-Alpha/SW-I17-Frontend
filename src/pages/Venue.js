import React, { Component, Fragment, useState } from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/Images/Group.svg";
import Select from "../Components/Select.js";
// import { DateRangePicker } from "react-date-range";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Venue = () => {
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [formdata, setFormData] = useState({});
  const states = ["Delhi", "Mumbai", "Chennai"];
  const disabled_dates = [
    new Date(2022, 3, 10),
    new Date(2022, 3, 11),
    new Date(2022, 4, 10),
  ];
  console.log(formdata);
  return (
    <>
      <div className="h-full" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="flex flex-col flex-wrap gap-10 font-IBM-Sans px-8 my-10">
          <div>
            <p className="text-[3vh] ">Book a Venue</p>
          </div>

          <form action="/">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
              <div className="flex flex-col gap-6 pl-4">
                <div className="flex flex-col gap-4">
                  <h4>Event Name</h4>
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
                <div className="flex flex-col gap-4">
                  <h4>Description</h4>
                  <textarea
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#F6F5F6",
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
                      background: "#F6F5F6",
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
                  <div className="w-full -mt-2 max-h-[50vh] flex flex-row flex-wrap justify-around object-contain my-auto bg-[#d6d4d410] backdrop-blur-md">
                    <div>
                      <Calendar
                        date={startdate}
                        minDate={new Date()}
                        disabledDates={disabled_dates}
                        onChange={(e) => {
                          setStartDate(e);
                          setFormData({
                            ...formdata,
                            startdate: e.toLocaleString().split(",")[0],
                          });
                        }}
                      />
                    </div>
                    <div>
                      <Calendar
                        date={enddate}
                        minDate={startdate}
                        disabledDates={disabled_dates}
                        onChange={(e) => {
                          setEndDate(e);
                          setFormData({
                            ...formdata,
                            enddate: e.toLocaleString().split(",")[0],
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 text-black mt-1 w-full">
                  <div className="flex flex-col gap-4 w-full">
                    <h4>Event Name</h4>
                    <Select
                      data={states}
                      name="State1"
                      setFormData={setFormData}
                      formdata={formdata}
                    />
                  </div>

                  <div className="flex flex-col gap-4 w-full">
                    <h4>Event Name</h4>
                    <Select
                      data={states}
                      name="State2"
                      setFormData={setFormData}
                      formdata={formdata}
                    />
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
