/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'
import { gql, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FbAccount = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const [userData, setUserData] = useState();
  var userData;
  const longlivedaccesstoken = localStorage.getItem("longlivedaccesstoken");
  console.log(userData);

  const USERPAGES_QUERY = gql`
    query fbGetUserPages($longlivedaccesstoken: String!) {
      fbGetUserPages(longlivedaccesstoken: $longlivedaccesstoken)
    }
  `;

  const { loading, err, data } = useQuery(USERPAGES_QUERY, {
    variables: {
      longlivedaccesstoken,
    },
  });

  if (err) {
    console.log("err", err);
    toast.error("Error: Cannot get user pages", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (!loading) {
    console.log(JSON.parse(data.fbGetUserPages));
    userData = JSON.parse(data.fbGetUserPages);
    if (JSON.parse(data.fbGetUserPages)?.accounts) {
      JSON.parse(data.fbGetUserPages)?.accounts.data.map((data, idx) =>
        localStorage.setItem(`${data.id}`, data.access_token)
      );
    }
  }


  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex gap-[24vw] h-[100vh]"
      >
        <div>
          <Navbar />
          <div className="md:hidden block absolute z-50">
            <Burger open={show} setOpen={setShow} />
          </div>
          <Sidebar show={show} setShow={setShow} />
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
        </div>

        <div className="flex flex-col gap-[8vh]">
          <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
            <p className="text-2xl font-extrabold tracking-wide">Facebook</p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
              <p>You are logged in as:</p>
            </div>
            <div>
              <div className="flex items-center px-8 w-[22vw] h-[18vh]  bg-[#FFFFFF] shadow-lg rounded-xl py-10">
                <div className="flex flex-col">
                  {userData && (
                    <>
                      <div className="flex gap-6 items-center">
                        <div className="w-[5vw] h-[10vh] rounded-full">
                          <img
                            src={userData.picture.data.url}
                            alt="dp"
                            className="w-[5vw] h-[10vh] rounded-full"
                          />
                        </div>
                        <div className="font-IBM-Sans">
                          <p className="text-lg capitalize font-IBM-Sans ">
                            {userData.name}
                          </p>
                          <p
                            className="text-base capitalize font-IBM-Sans "
                            style={{ color: "#818181" }}
                          >
                            {userData.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end ">
                        <a
                          href="/"
                          onClick={() => {
                            localStorage.removeItem("longlivedaccesstoken");
                            navigate("/");
                          }}
                          className="underline text-[#A72314] font-IBM-Sans text-base font-semibold pl-48 "
                        >
                          Logout
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
            <p>Your Facebook pages</p>
          </div>

          <div className="flex gap-16">
            {userData?.accounts &&
              userData?.accounts?.data.map((data, idx) => {
                return (
                  <div
                    className="flex items-center px-4 w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl relative"
                    key={idx}
                  >
                    <div className="flex gap-6 items-center">
                      <div className="w-[7vw] h-[10vh] rounded-full">
                        <img
                          src={data.picture.data.url}
                          alt="logo"
                          className="w-[7vw] h-[10vh] rounded-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2 font-IBM-Sans text-base font-semibold">
                        <p>{data.name}</p>
                      </div>
                    </div>

                    <div>
                      <a
                        href={`/fb_main/${data.id}`}
                        className="underline text-[#F0783B] font-IBM-Sans text-base font-semibold absolute bottom-[1vh] right-[3vh]"
                      >
                        Visit
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FbAccount;
