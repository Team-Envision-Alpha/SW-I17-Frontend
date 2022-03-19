import React, { Component, Fragment, useState, useEffect } from "react";
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
import { gql, useMutation, useQuery } from "@apollo/client";

import * as XLSX from "xlsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Venue = () => {
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [formdata, setFormData] = useState({});
  const [extrausers, setExtraUsers] = useState([]);
  const [userdata, setUserData] = useState({});
  // const [userfile, setUserFile] = useState();
  const teams = ["events", "hr", "finance", "c&m", "technical"];
  const time = [
    "9:00 AM-10:00 AM",
    "10:00 AM-11:00 AM",
    "11:00 AM-12:00 PM",
    "12:00 PM-1:00 PM",
    "1:00 PM-2:00 PM",
    "2:00 PM-3:00 PM",
    "3:00 PM-4:00 PM",
    "4:00 PM-5:00 PM",
    "5:00 PM-6:00 PM",
    "6:00 PM-7:00 PM",
    "7:00 PM-8:00 PM",
    "8:00 PM-9:00 PM",
    "9:00 PM-10:00 PM",
    "10:00 PM-11:00 PM",
    "11:00 PM-12:00 AM",
  ];
  const disabled_dates = [
    new Date(2022, 3, 10),
    new Date(2022, 3, 11),
    new Date(2022, 4, 10),
  ];
  function arrayRemove(arr, value) {
    if (arr.length === 1) {
      return "empty";
    } else {
      return arr.filter(function (ele) {
        return ele !== value;
      });
    }
  }
  function readAppendFile(f) {
    // console.log(f);
    // var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      // console.log("Data>>>" + data); // shows that excel data is read
      // console.log(convertToJson(data));
      setExtraUsers([...extrausers, ...convertToJson(data)]); // shows data in json format
    };
    reader.readAsBinaryString(f);
  }

  function convertToJson(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  }
  console.log(formdata);
  const VENUE_QUERY = gql`
    query {
      getAllVenues {
        id
        name
        city
        pincode
      }
    }
  `;

  const { loading, err, data } = useQuery(VENUE_QUERY);

  const EVENT_MUTATION = gql`
    mutation createEvent(
      $name: String!
      $description: String!
      $venue: ID!
      $organiser: String!
      $caption: String!
      $fromdate: String!
      $todate: String!
      $time: String!
      $image: String!
      $departmentInvited: [String]
      $usersInvited: [InvitedUserInput]
      $status: String!
    ) {
      createEvent(
        eventInput: {
          name: $name
          description: $description
          venue: $venue
          organiser: $organiser
          caption: $caption
          fromdate: $fromdate
          todate: $todate
          time: $time
          image: $image
          departmentInvited: $departmentInvited
          usersInvited: $usersInvited
          status: $status
        }
      ) {
        name
      }
    }
  `;
  const [events, { event_loading }] = useMutation(EVENT_MUTATION, {
    onError: (err) => {
      console.log(err);
      toast.error("Error: Event Not Added!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onCompleted: (data) => {
      console.log(data);

      toast.success(`Event Added successfully!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({});
    },
    // update(_, result) {
    //   console.log(result.data.registerUser);
    //   // localStorage.setItem("aicteuser", JSON.stringify(result.data.loginUser));
    //   setFormData({});
    // },
    variables: formdata,
  });
  const onSubmit = (e) => {
    console.log(formdata);
    e.preventDefault();
    setFormData({ ...formdata, usersInvited: extrausers, status: "pending" });
    events();
    // console.log(loading);
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setFormData({ ...formdata, image: e.target.result });
    };
  };
  return (
    <>
      <div className="h-full" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
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
                    value={formdata.name ? formdata.name : ""}
                    placeholder="Text here"
                    name="name"
                    onChange={(e) => {
                      setFormData({ ...formdata, name: e.target.value });
                    }}
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
                    value={formdata.description ? formdata.description : ""}
                    rows={6}
                    name="description"
                    onChange={(e) => {
                      setFormData({ ...formdata, description: e.target.value });
                    }}
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
                    value={formdata.organiser ? formdata.organiser : ""}
                    name="organiser"
                    placeholder="Text here"
                    onChange={(e) => {
                      setFormData({ ...formdata, organiser: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Caption</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#F6F5F6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    value={formdata.caption ? formdata.caption : ""}
                    name="caption"
                    placeholder="Text here"
                    onChange={(e) => {
                      setFormData({ ...formdata, caption: e.target.value });
                    }}
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
                            fromdate: e.toLocaleString().split(",")[0],
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
                            todate: e.toLocaleString().split(",")[0],
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 text-black mt-1 w-full">
                  {/* <div className="flex flex-col gap-4 w-full">
                    <h4>States</h4>
                    <Select
                      data={states}
                      name="state"
                      setFormData={setFormData}
                      formdata={formdata}
                    />
                  </div> */}

                  <div className="flex flex-col gap-4 w-full">
                    <h4>Venue</h4>
                    {data ? (
                      <Select
                        dataobj={data.getAllVenues}
                        name="venue"
                        setFormData={setFormData}
                        formdata={formdata}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Time</h4>
                  <Select
                    data={time}
                    name="time"
                    setFormData={setFormData}
                    formdata={formdata}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="mx-auto text-center mb-5">
                  Select Teams for Invite List
                </h3>
                <div className="flex justify-evenly">
                  <div
                    onClick={() => {
                      setFormData({ ...formdata, departmentInvited: teams });
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
                        delete newData.departmentInvited;
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
                        {formdata.departmentInvited &&
                        formdata.departmentInvited.includes(team) ? (
                          <Button
                            variant="outlined"
                            color="success"
                            onClick={() => {
                              const resp = arrayRemove(
                                formdata.departmentInvited,
                                team
                              );
                              if (resp !== "empty") {
                                setFormData({
                                  ...formdata,
                                  departmentInvited: resp,
                                });
                              } else {
                                setFormData((formdata) => {
                                  const newData = { ...formdata };
                                  delete newData.departmentInvited;
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
                              if (formdata.departmentInvited) {
                                setFormData({
                                  ...formdata,
                                  departmentInvited: [
                                    ...formdata.departmentInvited,
                                    team,
                                  ],
                                });
                              } else {
                                setFormData({
                                  ...formdata,
                                  departmentInvited: [team],
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
                  <div className="mt-8">
                    <div className="flex flex-col justify-center text-center object-center mx-auto place-content-center">
                      Upload Event Image<br></br>
                      <input
                        type="file"
                        name="image"
                        accept="image/svg, image/png, image/jpeg, image/jpg, image/webp"
                        className="mt-8 block ml-12 w-full text-sm text-slate-500 place-content-center
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-50 file:text-blue-700
      hover:file:bg-violet-100"
                        onChange={handleImage}
                      />
                      {/* <div className="mt-8">
                        <Button variant="outlined" color="primary">
                          Upload Event Image
                        </Button>
                      </div> */}
                    </div>
                  </div>
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
                      className="w-[full] p-4 outline-none text-center rounded-[8px] bg-black text-white cursor-pointer"
                      onClick={() => {
                        if (userdata.name && userdata.email && userdata.phone) {
                          setExtraUsers([...extrausers, userdata]);
                          setFormData({
                            ...formdata,
                            usersInvited: extrausers,
                          });
                        }
                        // console.log(extrausers);
                      }}
                    >
                      Submit
                    </div>
                  </div>
                </div>
                <div className=" mt-4 flex flex-col justify-center text-center object-center mx-auto place-content-center">
                  Upload file for invite list<br></br>
                  <input
                    type="file"
                    className="mt-8 block w-full text-sm text-slate-500 place-content-center ml-[35%]
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-50 file:text-blue-700
      hover:file:bg-violet-100"
                    onChange={(e) => {
                      // setUserFile(e.target.files[0]);
                      // console.log(readFile(e.target.files[0]));
                      readAppendFile(e.target.files[0]);
                      // setExtraUsers([
                      //   ...extrausers,
                      //   readFile(e.target.files[0]),
                      // ]);
                      // // console.log(e.target.files[0]);
                    }}
                  />
                  {/* <div className="mt-8">
                    <Button variant="outlined" color="primary">
                      Add to Event List
                    </Button>
                  </div> */}
                </div>
                <hr className="mt-5"></hr>
                <table className="w-full mt-5 ">
                  <thead>
                    <tr
                      className="text-md font-semibold   text-gray-900   border-[#B9B9B9]  text-center border-3"
                      style={{ background: "rgba(0, 0, 0, 0.05)" }}
                    >
                      <th className="py-3 border-[#B9B9B9] border-2 ">Name</th>
                      <th className="py-3  border-[#B9B9B9] border-2">Email</th>
                      <th className="py-3  border-[#B9B9B9] border-2">Phone</th>
                      <th className="py-3 border-[#B9B9B9] border-2">Modify</th>
                    </tr>
                  </thead>
                  <tbody
                    className=" max-h-[40vh] overflow-scroll"
                    style={{ maxHeight: "30vh", overflowY: "scroll" }}
                  >
                    {extrausers &&
                      extrausers.map((user, idx) => {
                        return (
                          <tr className="text-[#000000] odd:bg-white even:bg-slate-100">
                            <td
                              className="text-center py-3 border-[#B9B9B9] border-2 
                  text-md"
                            >
                              <div>
                                <p>{user.name}</p>
                              </div>
                            </td>
                            <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                              <div>
                                <p>{user.email}</p>
                              </div>
                            </td>
                            <td className="text-center py-3 text-md border-[#B9B9B9] border-2">
                              <div>
                                <p>{user.phone}</p>
                              </div>
                            </td>
                            <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                              <div>
                                <p
                                  className="text-[#874439] font-bold cursor-pointer hover:underline transition"
                                  onClick={() => {
                                    const resp = arrayRemove(extrausers, user);
                                    if (resp !== "empty") {
                                      setExtraUsers(resp);
                                      // setFormData({
                                      //   ...formdata,
                                      //   departmentInvited: resp,
                                      // });
                                    } else {
                                      // setFormData((formdata) => {
                                      //   const newData = { ...formdata };
                                      //   delete newData.departmentInvited;
                                      //   return newData;
                                      // });
                                      setExtraUsers([]);
                                    }
                                  }}
                                >
                                  Delete
                                </p>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
          <div className="mt-8 mx-auto" onClick={onSubmit}>
            <Button variant="contained" color="primary">
              Submit Event Data
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venue;
