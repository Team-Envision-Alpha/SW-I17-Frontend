/* eslint-disable no-unused-vars */

import React from "react";
import dp from "../Assets/Images/ico.svg";
import logo from "../Assets/Images/logo.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("aicteuser"));
  const user = { name: "Rishit", role: "admin" };
  return (
    <>
      <div className="float-right absolute top-5 right-5 flex flex-row gap-x-7">
        <div className="flex gap-2">
          <div>
            <img src={dp} alt="dp" width={35} />
          </div>
          <div className="font-IBM-Sans">
            <p className="text-sm capitalize">{user.name}</p>
            <p className="text-xs capitalize " style={{ color: "#818181" }}>
              {user.role}
            </p>
          </div>
        </div>
        <a
          href="/"
          onClick={() => {
            localStorage.removeItem("aicteuser");
            navigate("/");
          }}
        >
          <Button variant="outlined" color="error" size="small">
            Logout
          </Button>
        </a>
      </div>
    </>
  );
};

export default Navbar;
