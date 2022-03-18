import React from "react";
import dp from "../Assets/Images/dp.svg";
import logo from "../Assets/Images/logo.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between p-6 h-[12vh] items-center">
        <div>
          <a href="/dashboard">
            <img src={logo} alt="logo" width={300} h={60} />
          </a>
        </div>
        <div className="flex gap-8 ">
          <div className="flex gap-2">
            <div>
              <img src={dp} alt="dp" />
            </div>
            <div className="font-IBM-Sans">
              <p className="text-sm">Rishit Shivesh</p>
              <p className="text-xs capitalize " style={{ color: "#818181" }}>
                admin
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
      </div>
    </>
  );
};

export default Navbar;
