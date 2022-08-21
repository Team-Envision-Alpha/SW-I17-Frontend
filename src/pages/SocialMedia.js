/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import fbLogo from "../Assets/Images/fbLogo.svg";
import twitterLogo from "../Assets/Images/twitterLogo.svg";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import axios from "axios";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialMedia = () => {
  const [show, setShow] = useState(false);
  const [shortlivedaccesstoken, setShortlivedaccesstoken] = useState("")
  const LONGLIVEACCESSTOKEN_MUTATION = gql`
  mutation
    fbGetLongLivedAccessToken(
  $shortlivedaccesstoken: String!
    ){
      fbGetLongLivedAccessToken(
        shortlivedaccesstoken: $shortlivedaccesstoken)
    }
  
  
`;

  const [register, { loading }] = useMutation(LONGLIVEACCESSTOKEN_MUTATION, {
    onError: (err) => {
      console.log("err", err);
      toast.error("Error: Cannot Login Facebook User", {
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

      localStorage.setItem("longlivedaccesstoken", JSON.parse(data.fbGetLongLivedAccessToken).longlivedaccesstoken.access_token)

      toast.success(`Facebook user Logged in successfully`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    },
    variables:{
      shortlivedaccesstoken
    }

  });


  const responseFacebook = async (response) => {
    console.log("response", response);
    setShortlivedaccesstoken(response.accessToken)
    register();
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
        
        <div className="flex flex-col gap-[12vh]">
          <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
            <p className="text-2xl font-extrabold tracking-wide">
              Social Media
            </p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
              <p>Connect Your Social Media Handles</p>
            </div>
            <div className="flex gap-[6vw]">
              <div className="flex items-center justify-center w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl">
                {/* <FacebookLogin
                  appId="2075260336175600"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="public_profile,email,pages_read_engagement,pages_manage_posts, pages_read_user_content,publish_video"
                  onClick={(componentClicked) => {
                    console.log(componentClicked);
                  }}
                  callback={responseFacebook} /> */}
                <FacebookLogin
                  appId="2075260336175600"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="public_profile,email,pages_read_engagement,pages_manage_posts, pages_read_user_content,publish_video"
                  onClick={(componentClicked) => {
                    console.log(componentClicked);
                  }}
                  callback={responseFacebook}
                  render={renderProps => (
                    <button>
                      <img src={fbLogo} onClick={renderProps.onClick} alt="fbLogo" />
                    </button>

                  )}
                />
              </div>
              <div className="flex items-center justify-center w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl">
                <img src={twitterLogo} alt="fbLogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
