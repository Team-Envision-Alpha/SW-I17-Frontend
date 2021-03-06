import React from "react";
import logo_new from "../Assets/Images/logo_new.svg";
import { AiOutlineLike } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { FaComment } from "react-icons/fa";

const PostCard = ({ img, likes, comments, save }) => {
  return (
    <>
      <div className="flex flex-col gap-4  font-IBM-Sans">
        <div
          className="w-[16vw] h-[40vh] rounded-xl"
          style={{ backgroundColor: "rgba(224, 224, 224, 0.5)" }}
        >
          <img src={img} alt="img" width={250} className="rounded-t-xl" />
          <div className="flex gap-2 p-2 items-center">
            <div>
              <img src={logo_new} alt="logo" width={32} height={26} />
            </div>
            <div>
              <p className="font-bold text-xs">Posted By: A. Suresh</p>
              <p className="text-xs" style={{ color: "#414141" }}>
                Role: Admin
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[16vw] justify-around items-center  ">
          <AiOutlineLike className="text-lg " />
          <span className="font-bold text-[1.3vh] -ml-1 ">{likes}</span>
          <FaComment className="text-lg" />
          <span className="font-bold text-[1.3vh] -ml-1">{comments}</span>
          <FiBookmark className="text-xl" />
          <span className="font-bold text-[1.3vh] -ml-1 ">{save}</span>
          <a
            href="http://localhost:3000/social_analytics"
            className="underline text-blue-600"
          >
            analytics
          </a>
        </div>
      </div>
    </>
  );
};

export default PostCard;
