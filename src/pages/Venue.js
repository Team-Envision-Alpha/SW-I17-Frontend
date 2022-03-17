import React, { Component, Fragment, useState } from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/Images/Group.svg";
import Select from "react-select";
// import { DateRangePicker } from "react-date-range";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Venue = () => {
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const states = [
    { label: "Delhi", value: "Delhi" },
    { label: "Chennai", value: "Chennai" },
    { label: "Mumbai", value: "Mumbai" },
  ];
  const disabled_dates = [
    new Date(2022, 3, 10),
    new Date(2022, 3, 11),
    new Date(2022, 4, 10),
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: "1px dotted pink",
      color: state.isSelected ? "white" : "blue",
      padding: 10,
    }),
    control: (provided) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: "20vw",
      background: "#f6f5f6",
      padding: "0.6rem",
      marginTop: "0.1rem",
      border: "2px solid #808080",
      borderRadius: "8px",
    }),
    menu: (provided) => ({
      ...provided,
      width: "20vw",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  const selectionRange = {
    startDate: startdate,
    endDate: enddate,
    key: "selection",
  };
  return (
    <>
      <div className="h-full" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="flex flex-col gap-10 font-IBM-Sans px-8 my-10">
          <div>
            <p className="text-[3vh] ">Book a Venue</p>
          </div>

          <form action="/">
            <div className="grid grid-cols-2 gap-20 ">
              <div className="flex flex-col gap-6 pl-4">
                <div className="flex flex-col gap-4">
                  <h4>Event Name</h4>
                  <input
                    type="text"
                    className="w-[full] p-4 outline-none"
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
                  <div className="w-full max-h-[50vh] flex flex-row justify-around object-contain my-auto bg-[#c5c3c310] backdrop-blur-md">
                    <div>
                      <Calendar
                        date={startdate}
                        minDate={new Date()}
                        disabledDates={disabled_dates}
                        onChange={(e) => setStartDate(e)}
                      />
                    </div>
                    <div>
                      <Calendar
                        date={enddate}
                        minDate={startdate}
                        disabledDates={disabled_dates}
                        onChange={(e) => {
                          setEndDate(e);
                        }}
                      />
                    </div>
                  </div>
                  {/* <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    scroll={true}
                    minDate={new Date()}
                    direction="vertical"
                    disabledDates={disabled_dates}
                  /> */}
                </div>
                <div className="flex gap-6 text-black mt-1">
                  <div className="flex flex-col gap-4">
                    <h4>Event Name</h4>
                    <Select
                      className=""
                      classNamePrefix="select"
                      isSearchable="true"
                      isClearable="true"
                      name="color"
                      styles={customStyles}
                      options={states}
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4>Event Name</h4>
                    <Select
                      className=""
                      classNamePrefix="select"
                      isSearchable="true"
                      isClearable="true"
                      name="color"
                      styles={customStyles}
                      options={states}
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
