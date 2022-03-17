import React, { Component, Fragment, useState } from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/Images/Group.svg";
import Select from "../Components/Select.js";
// import { DateRangePicker } from "react-date-range";
import { Calendar } from "react-date-range";
import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BsCheckLg, BsXLg, BsPlusLg } from "react-icons/bs";
import states from "../Assets/Data/States.json";

const Venue = () => {
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [formdata, setFormData] = useState({});
  const [extrausers, setExtraUsers] = useState([]);
  const [userdata, setUserData] = useState({});
  const teams = ["Events", "HR", "Finance", "C&M", "Technical"];
  const disabled_dates = [
    new Date(2022, 3, 10),
    new Date(2022, 3, 11),
    new Date(2022, 4, 10),
  ];
  function arrayRemove(arr, value) {
    if (arr.length == 1) {
      return "empty";
    } else {
      return arr.filter(function (ele) {
        return ele != value;
      });
    }
  }
  console.log(formdata);
  return (
    <>
      <div className="h-full" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="flex flex-col flex-wrap gap-10 font-IBM-Sans px-8 my-10">
          <div>
            <p className="text-[3vh] ">Register Event</p>
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
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Event Description</h4>
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
                    name="description"
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
                    name="organiser"
                    placeholder="Text here"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h4>Select Date Range</h4>
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
                    <h4>States</h4>
                    <Select
                      data={states}
                      name="state"
                      setFormData={setFormData}
                      formdata={formdata}
                    />
                  </div>

                  <div className="flex flex-col gap-4 w-full">
                    <h4>Venue</h4>
                    <Select
                      data={states}
                      name="venue"
                      setFormData={setFormData}
                      formdata={formdata}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="mx-auto text-center mb-5">
                  Select Teams for Invite List
                </h3>
                <div className="flex justify-evenly">
                  <div
                    onClick={() => {
                      setFormData({ ...formdata, invitedTeams: teams });
                    }}
                  >
                    <Button variant="outlined" color="success">
                      Select All
                      <span className="ml-3">
                        <BsCheckLg />
                      </span>
                    </Button>
                  </div>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      setFormData((formdata) => {
                        const newData = { ...formdata };
                        delete newData.invitedTeams;
                        return newData;
                      });
                    }}
                  >
                    Clear All
                    <span className="ml-3">
                      <BsXLg />
                    </span>
                  </Button>
                </div>

                <div className="flex justify-center flex-row flex-wrap mt-1">
                  {teams.map((team, idx) => {
                    return (
                      <div className="mr-4 transition mt-3">
                        {formdata.invitedTeams &&
                        formdata.invitedTeams.includes(team) ? (
                          <Button
                            variant="outlined"
                            color="success"
                            onClick={() => {
                              const resp = arrayRemove(
                                formdata.invitedTeams,
                                team
                              );
                              if (resp != "empty") {
                                setFormData({
                                  ...formdata,
                                  invitedTeams: resp,
                                });
                              } else {
                                setFormData((formdata) => {
                                  const newData = { ...formdata };
                                  delete newData.invitedTeams;
                                  return newData;
                                });
                              }
                            }}
                          >
                            {team}
                            <span className="ml-3">
                              <BsXLg />
                            </span>
                          </Button>
                        ) : (
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              if (formdata.invitedTeams) {
                                setFormData({
                                  ...formdata,
                                  invitedTeams: [
                                    ...formdata.invitedTeams,
                                    team,
                                  ],
                                });
                              } else {
                                setFormData({
                                  ...formdata,
                                  invitedTeams: [team],
                                });
                              }
                            }}
                          >
                            {team}
                            <span className="ml-3">
                              <BsPlusLg />
                            </span>
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="mx-auto text-center mb-5">
                  Add Users to Invite List
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      className="w-[full] p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#F6F5F6",
                        border: "2px solid grey",
                        borderRadius: "8px",
                      }}
                      placeholder="Name"
                      name="name"
                      onChange={(e) => {
                        setUserData({ ...userdata, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <input
                      type="email"
                      className="w-[full] p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#F6F5F6",
                        border: "2px solid grey",
                        borderRadius: "8px",
                      }}
                      placeholder="Email"
                      name="email"
                      onChange={(e) => {
                        setUserData({ ...userdata, email: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex flex-col gap-4">
                    <input
                      type="tel"
                      className="w-[full] p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#F6F5F6",
                        border: "2px solid grey",
                        borderRadius: "8px",
                      }}
                      placeholder="Phone"
                      name="phone"
                      onChange={(e) => {
                        setUserData({ ...userdata, phone: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div
                      className="w-[full] p-4 outline-none rounded-[8px] bg-black text-white cursor-pointer"
                      onClick={() => {
                        setExtraUsers([...extrausers, userdata]);
                        console.log(extrausers);
                      }}
                    >
                      Submit
                    </div>
                  </div>
                </div>
                <table></table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Venue;
