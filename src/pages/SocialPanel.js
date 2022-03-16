import React from "react";
import bg from "../Assets/Images/Group.svg";
import { BsCameraReels, BsCamera } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Button from "@mui/material/Button";

import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";

const SocialPanel = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="h-[100vh]">
      <Navbar />
      <div className="flex flex-col my-12 gap-8 px-10">
        <div>
          <p className="text-[3vh] font-IBM-Sans ">Make a post</p>
        </div>
        <div className="flex gap-10">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Text here"
            className="outline-none w-[20vw] p-4 font-IBM-Sans font-light"
            style={{
              color: "#818181",
              background: "#E0E0E0",
              opacity: "0.5",
              borderRadius: "8px",
            }}
          />

          <div className="flex gap-16">
            <div className="flex items-center gap-4">
              <div
                className="w-[5vw] h-[6vh] rounded-full flex justify-center items-center  "
                style={{
                  background: "#DFE9F9",
                  width: "3vw",
                  height: "6vh",
                  borderRadius: "16vh",
                }}
              >
                <BsCamera style={{ color: "#0F56B3" }} className="text-[4vh]" />
              </div>
              <span
                style={{ color: "#0A3977" }}
                className="text-[3vh] font-bold"
              >
                Photo
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="flex justify-center items-center  "
                style={{
                  background: " #DFF4DF",
                  width: "3vw",
                  height: "6vh",
                  borderRadius: "16vh",
                }}
              >
                <BsCameraReels
                  style={{ color: "#1F8B24" }}
                  className="text-[3vh]"
                />
              </div>
              <span
                style={{ color: "#1F8B24" }}
                className="text-[3vh] font-bold"
              >
                Video
              </span>
            </div>
            <div className="flex items-center ">
              <Button variant="outlined" startIcon={<AiOutlineDown />}>
                Post On
              </Button>
            </div>
            <div className="flex items-center">
              <button
                className="text-white text-xl w-[10vh] h-[6vh] flex items-center justify-center"
                style={{ backgroundColor: "#7C4DFF", borderRadius: "8px" }}
              >
                Post
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          <div>
            <p className="text-[3vh] font-IBM-Sans ">Post Analytics</p>
          </div>
          <div className="flex flex-wrap gap-16">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPanel;
