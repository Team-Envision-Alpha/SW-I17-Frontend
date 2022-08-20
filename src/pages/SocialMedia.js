import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import fbLogo from "../Assets/Images/fbLogo.svg";
import twitterLogo from "../Assets/Images/twitterLogo.svg";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from "axios";
const SocialMedia = () => {
  const [show, setShow] = useState(false);
  const responseFacebook = async (response) => {
    const data = {
      shortlivedaccesstoken:response.accessToken,
      useremail:response.email,
      userid: response.userId,
      username:response.name,
      userpicture:response.picture,
    }

    const getlonglivedaccesstokens = await axios.post("getlonglivedaccesstoken",{data}).then((data)=>{return data.data.data}).catch((err)=>{console.log(err)})
    console.log(getlonglivedaccesstokens)
    localStorage.setItem("longlivedaccesstoken",getlonglivedaccesstokens.longlivedaccesstoken.access_token)
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
