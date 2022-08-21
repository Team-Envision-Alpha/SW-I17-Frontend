/* eslint-disable no-unused-vars */

import Sidebar from "../Components/Sidebar";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Detail from "../Components/Event/Detail";
import Duration from "../Components/Event/Duration";
import Invitations from "../Components/Event/Invitations";
import Teams from "../Components/Event/Teams";
import Food from "../Components/Event/Food";
import Navbar from "../Components/NewNavbar";
import React, { Component, Fragment, useState, useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import bg from "../Assets/Images/Group.svg";
// import Select from "../Components/Select.js";
// import { DateRangePicker } from "react-date-range";
import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { BsCheckLg, BsXLg, BsPlusLg } from "react-icons/bs";
// import states from "../Assets/Data/States.json";
import { gql, useMutation, useQuery } from "@apollo/client";
import * as XLSX from "xlsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

export default function Event() {
  const steps = [
    "Event Details",
    "Event Duration",
    "Food Requirements",
    "Select Teams",
    "Invitations",
  ];
  const stepElements = [<Detail />, <Duration />];
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);
  const state1 =
    " border-2 bg-[#f3f3f3] border-green-500 rounded-full h-[50px] w-[50px] mx-auto my-auto pt-[10px]  md:scale-100 scale-50";
  const state2 =
    "bg-green-500 text-white rounded-full h-[50px] w-[50px] mx-auto my-auto pt-[12px]  md:scale-100 scale-50";
  ///////////////////////////////////////
  const user = JSON.parse(localStorage.getItem("aicteuser"));

  const [formdata, setFormData] = useState({});
  const [extrausers, setExtraUsers] = useState([]);
  const [userdata, setUserData] = useState({});
  const [userfile, setUserFile] = useState();
  const teams = ["events", "hr", "finance", "c&m", "technical"];

  console.log(formdata);
  /////////////////////////////////////////////

  console.log(formdata);
  const VENUE_QUERY = gql`
    query {
      getVenues {
        id
        name
        email
        city
        
      }
    }
  `;

  const { loading, err, data } = useQuery(VENUE_QUERY);
  console.log(data);
  const EVENT_MUTATION = gql`
    mutation createEvent(
      $name: String
      $description: String
      $venue: ID
      $organiser: String
      $caption: String
      $fromdate: String
      $todate: String
      $time: String
      $image: String
      $departmentInvited: [String]
      $usersInvited: [InvitedUserInput]
      $status: String
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
        id
        name
      }
    }
  `;
  const [events, event_loading] = useMutation(EVENT_MUTATION, {
    onError: (err) => {
      console.log(err.message);
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
    variables: formdata,
  });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formdata,
      status: "pending",
      time: JSON.stringify(formdata.time),
      food: JSON.stringify(formdata.food),
    });
    console.log(formdata);
    navigate("../requests", { replace: true });
  };

  return (
    <main
      className="flex flex-row bg-[#f3f3f3]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <Burger open={show} setOpen={setShow}></Burger>
      <Sidebar show={show} setShow={setShow} />

      <section className="mt-12 z-10 mx-auto">
        <h1 className="font-bold text-2xl">Book a Venue</h1>
        <p className="mt-8 text-blue-400 hover:text-blue-600 transition cursor-pointer mb-8">
          Breadcrumb / breadcrumb / breadcrumb
        </p>
        <div className="flex flex-row mx-auto md:justify-center justify-between md:w-[70vw] w-max ">
          <div className="mx-auto w-[85vw] md:w-[50vw]  ">
            <div className="flex flex-row justify-between relative">
              <div className="transition w-[70vw] md:w-[45vw] h-[5px] mx-auto my-auto absolute top-[23px] left-[23px] flex flex-row flex-wrap justify-center">
                <div
                  className={`w-full h-full bg-green-600 transition `}
                  style={{
                    flexBasis: `${(current / (steps.length - 1)) * 100}%`,
                  }}
                ></div>
                <div
                  className={`w-full h-full bg-green-300 transition `}
                  style={{
                    flexBasis: `${
                      ((steps.length - 1 - current) / (steps.length - 1)) * 100
                    }%`,
                  }}
                ></div>
              </div>
              {steps.map((step, index) => {
                // console.log(current, index, current <= index);
                return (
                  <div key={index} className="text-center">
                    <div className={index <= current ? state2 : state1}>
                      {index + 1}
                    </div>
                    <div className="text-[0.5rem] sm:text-sm mt-0 sm:mt-2">
                      {step}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-row mx-auto md:justify-center justify-between md:w-[70vw] w-max mt-8">
          {current === 0 ? (
            <Detail
              setFormData={setFormData}
              formdata={formdata}
              extrausers={extrausers}
              setExtraUsers={setExtraUsers}
              setUserData={setUserData}
              userdata={userdata}
              setUserFile={setUserFile}
              userfile={userfile}
              user={user}
              current={current}
              setCurrent={setCurrent}
            />
          ) : null}
          {current === 1 ? (
            <Duration
              current={current}
              setCurrent={setCurrent}
              setFormData={setFormData}
              formdata={formdata}
              extrausers={extrausers}
              setExtraUsers={setExtraUsers}
              setUserData={setUserData}
              userdata={userdata}
              setUserFile={setUserFile}
              userfile={userfile}
              user={user}
              data={data}
            />
          ) : null}

          {current === 2 ? (
            <Food
              current={current}
              setCurrent={setCurrent}
              setFormData={setFormData}
              formdata={formdata}
              extrausers={extrausers}
              setExtraUsers={setExtraUsers}
              setUserData={setUserData}
              userdata={userdata}
              setUserFile={setUserFile}
              userfile={userfile}
              user={user}
              data={data}
              teams={teams}
              onSubmit={onSubmit}
            />
          ) : null}

          {current === 4 ? (
            <Invitations
              current={current}
              setCurrent={setCurrent}
              setFormData={setFormData}
              formdata={formdata}
              extrausers={extrausers}
              setExtraUsers={setExtraUsers}
              setUserData={setUserData}
              userdata={userdata}
              setUserFile={setUserFile}
              userfile={userfile}
              user={user}
              data={data}
              teams={teams}
            />
          ) : null}

          {current === 3 ? (
            <Teams
              current={current}
              setCurrent={setCurrent}
              setFormData={setFormData}
              formdata={formdata}
              extrausers={extrausers}
              setExtraUsers={setExtraUsers}
              setUserData={setUserData}
              userdata={userdata}
              setUserFile={setUserFile}
              userfile={userfile}
              user={user}
              data={data}
              teams={teams}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
}
