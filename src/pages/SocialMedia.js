/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import fbLogo from "../Assets/Images/fbLogo.svg";
import twitterLogo from "../Assets/Images/twitterLogo.svg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "react-router-dom";
import BothHandlePost from "../Components/BothHandlePost";

const SocialMedia = () => {
  const [show, setShow] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const oauthverifier = searchParams.get("oauth_verifier") || "";

  const oauthtoken = searchParams.get("oauth_token") || "";

  const [shortlivedaccesstoken, setShortlivedaccesstoken] = useState("");
  const LONGLIVEACCESSTOKEN_MUTATION = gql`
    mutation fbGetLongLivedAccessToken($shortlivedaccesstoken: String!) {
      fbGetLongLivedAccessToken(shortlivedaccesstoken: $shortlivedaccesstoken)
    }
  `;

  const [register] = useMutation(LONGLIVEACCESSTOKEN_MUTATION, {
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
      localStorage.setItem(
        "longlivedaccesstoken",
        JSON.parse(data.fbGetLongLivedAccessToken).longlivedaccesstoken
          .access_token
      );

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
    variables: {
      shortlivedaccesstoken,
    },
  });

  const responseFacebook = async (response) => {
    setShortlivedaccesstoken(response.accessToken);
    register();
  };

  const TWITTEROAUTH1_QUERY = gql`
    query Oauth1 {
      twOauth1
    }
  `;

  const TWITTEROAUTH2_MUTATION = gql`
    mutation twOauth2($oauthtoken: String!, $oauthverifier: String!) {
      twOauth2(oauthtoken: $oauthtoken, oauthverifier: $oauthverifier)
    }
  `;

  const [getoauth2, { loading }] = useMutation(TWITTEROAUTH2_MUTATION, {
    onError: (err) => {
      console.log("err", err);
      toast.error("Error: Cannot Login Twitter User", {
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
      // localStorage.setItem("longlivedaccesstoken", JSON.parse(data.fbGetLongLivedAccessToken).longlivedaccesstoken.access_token)
      console.log(JSON.parse(data.twOauth2));
      if (data) {
        const splitdata = JSON.parse(data.twOauth2).split("&");
        const oauth_token = splitdata[0].split("=")[1];
        const oauth_token_secret = splitdata[1].split("=")[1];
        const user_id = splitdata[2].split("=")[1];
        const screen_name = splitdata[3].split("=")[1];
        localStorage.setItem("twitter_oauth_token", oauth_token);
        localStorage.setItem("twitter_oauth_token_secret", oauth_token_secret);
        localStorage.setItem("twitter_user_id", user_id);
        localStorage.setItem("twitter_screen_name", screen_name);
        window.location.replace("/social_media");
      }
      toast.success(`Twitteruser Logged in successfully`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    variables: {
      oauthtoken,
      oauthverifier,
    },
  });

  const Twitteroauth1 = useQuery(TWITTEROAUTH1_QUERY);

  const loginTwitter = async () => {
    if (!Twitteroauth1.loading && Twitteroauth1.data) {
      window.location.replace(
        `https://api.twitter.com/oauth/authorize?oauth_token=${
          JSON.parse(Twitteroauth1?.data?.twOauth1).oauth_token
        }`
      );
    }
  };

  if (oauthverifier.length && oauthtoken.length) {
    localStorage.setItem("twitter_oauth_verifier", oauthverifier);
    getoauth2();
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex gap-[24vw] h-fit pb-20"
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
                <FacebookLogin
                  appId="2075260336175600"
                  fields="name,email,picture"
                  scope="public_profile,email,pages_read_engagement,pages_manage_posts, pages_read_user_content,publish_video"
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <button onClick={renderProps.onClick}>
                      <img src={fbLogo} alt="fbLogo" />
                    </button>
                  )}
                />
              </div>
              <div
                className="flex items-center justify-center w-[20vw] h-[15vh] cursor-pointer bg-[#FFFFFF] shadow-lg rounded-xl"
                onClick={() => {
                  loginTwitter();
                }}
              >
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
