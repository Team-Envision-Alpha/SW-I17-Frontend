import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const FbAccount = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const longlivedaccesstoken = localStorage.getItem("longlivedaccesstoken");
  console.log(userData);

  useEffect(() => {
    const getUserData = async () => {
      const userdata = await axios.get(`/getuserpages/${longlivedaccesstoken}`).then((data) => { return data.data.userdata; }).catch((err) => { console.log(err) })
      setUserData(userdata)
      userdata.accounts.data.map((data, idx) => (
        localStorage.setItem(`${data.id}`, data.access_token)
      )
      )
    }
    getUserData()
  }, [longlivedaccesstoken]);

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
              <div className="flex items-center px-8 w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl">
                <div className="flex flex-col">
                  {userData &&
                  <>
                    <div className="flex gap-6">
                      <div>
                        <img src={userData.picture.data.url} alt="dp" width={55} />
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
                  </>}
                </div>
              </div>
            </div>
          </div>

          <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
            <p>Your Facebook pages</p>
          </div>

          <div className="flex gap-16">

            {userData && userData.accounts.data.map((data, idx) => {
              return (
                <div className="flex items-center px-4 w-[20vw] h-[15vh]  bg-[#FFFFFF] shadow-lg rounded-xl relative" key={idx}>
                  <div className="flex gap-6">
                    <div>
                      <img src={data.picture.data.url} alt="logo" width={80} />
                    </div>
                    <div className="flex flex-col gap-2 font-IBM-Sans text-base font-semibold">
                      <p>{data.name}</p>
                    </div>
                  </div>

                  <div>
                    <a
                      href={`/facebookpage/${data.id}`}
                      className="underline text-[#F0783B] font-IBM-Sans text-base font-semibold absolute bottom-[3vh] right-[3vh]"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default FbAccount;
