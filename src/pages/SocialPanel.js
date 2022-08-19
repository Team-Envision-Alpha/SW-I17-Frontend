/* eslint-disable no-unused-vars */

import React from "react";
import bg from "../Assets/Images/Group.svg";
import { BsCameraReels, BsCamera } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Button from "@mui/material/Button";
import postCard from "../Assets/Images/postCard.svg";
import second from "../Assets/Images/2nd_post.jpeg";
import third from "../Assets/Images/3rd_Post.jpeg";
import fourth from "../Assets/Images/4th_Post.jpeg";

import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";

const SocialPanel = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />

      <div className="flex flex-col my-12 gap-8 px-10">
        <div className="flex justify-center my-10 gap-10">
          <div className="flex items-center">
            <button
              className="text-black font-semibold text-xl w-[20vh] h-[6vh] flex items-center justify-center"
              style={{ backgroundColor: "#4267b2", borderRadius: "8px" }}
            >
              Facebook
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="text-black font-semibold text-xl w-[20vh] h-[6vh] flex items-center justify-center"
              style={{ backgroundColor: "#0077b5", borderRadius: "8px" }}
            >
              Twitter
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="text-black font-semibold text-xl w-[20vh] h-[6vh] flex items-center justify-center"
              style={{ backgroundColor: "#3a5385", borderRadius: "8px" }}
            >
              LinkedIn
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="text-black font-semibold text-xl w-[20vh] h-[6vh] flex items-center justify-center"
              style={{ backgroundColor: "#df2a78", borderRadius: "8px" }}
            >
              Instagram
            </button>
          </div>
        </div>
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
            <p className="text-[3vh] font-IBM-Sans ">Your Posts </p>
          </div>
          <div className="flex flex-wrap gap-16">
            <PostCard img={postCard} likes="1200" comments="600" save="150" />
            <PostCard img={second} likes="1600" comments="400" save="200" />
            <PostCard img={third} likes="800" comments="700" save="500" />
            <PostCard img={fourth} likes="500" comments="100" save="100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPanel;
