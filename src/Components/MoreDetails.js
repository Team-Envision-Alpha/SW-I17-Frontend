import cross from "../Assets/Images/cross.svg";
import Invitations from "../Components/Event/newInvitations";
import Teams from "../Components/Event/newTeams";

import { useState } from "react";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import Select from "./Select.js";
// import { DateRangePicker } from "react-date-range";

import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BsCheckLg, BsXLg, BsPlusLg } from "react-icons/bs";
// import states from "../Assets/Data/States.json";

import * as XLSX from "xlsx";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Modal({ modal, setModal, event }) {
  //   console.log(event);

  const [formdata, setFormData] = useState({});
  const [extrausers, setExtraUsers] = useState([]);
  const [userdata, setUserData] = useState({});
  const [userfile, setUserFile] = useState();
  const teams = ["events", "hr", "finance", "c&m", "technical"];
  const [current, setCurrent] = useState(0);

  console.log(formdata);
  useEffect(() => {
    setFormData({ ...formdata, usersInvited: extrausers });
  }, [extrausers]);

  return (
    <div
      className={`${
        modal ? "block" : "hidden"
      } z-[100] bg-[#00000090] w-[100vw] h-[100vh] absolute top-0 left-0 flex flex-row transition-all duration-700`}
    >
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
      <div className="w-[80%] md:h-[85%] justify-center overflow-x-hidden rounded-xl overflow-y-scroll mx-auto my-auto bg-[#f3b641] animate-[ping_0.3s_ease-in-out_reverse_1]">
        <div className="w-full bg-[#f3f3f3] min-h-[95%] mt-8 relative overflow-x-hidden ">
          <div
            onClick={() => {
              setModal(!modal);
            }}
          >
            <img
              src={cross}
              className="absolute right-2 top-2 cursor-pointer"
              alt="cross"
            />
          </div>
          {current === 0 ? (
            <Teams
              userdata={userdata}
              setUserData={setUserData}
              userfile={userfile}
              setUserFile={setUserFile}
              extrausers={extrausers}
              setExtraUsers={setExtraUsers}
              formdata={formdata}
              setFormData={setFormData}
              toast={toast}
              teams={teams}
              current={current}
              setCurrent={setCurrent}
            />
          ) : null}
          {current === 1 ? (
            <Invitations
              userdata={userdata}
              setUserData={setUserData}
              userfile={userfile}
              setUserFile={setUserFile}
              extrausers={extrausers}
              setExtraUsers={setExtraUsers}
              formdata={formdata}
              setFormData={setFormData}
              toast={toast}
              teams={teams}
              current={current}
              setCurrent={setCurrent}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
