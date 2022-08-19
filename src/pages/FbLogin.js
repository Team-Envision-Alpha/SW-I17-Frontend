import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";

const FbLogin = () => {
  const [show, setShow] = useState(false);

  const onSubmit = (e) => {
    console.log("Successfull");
    e.preventDefault();
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url${bg})` }}
        className="flex gap-[24vw] h-[100vh]"
      >
        <div>
          <Navbar />
          <div className="md:hidden block absolute z-50">
            <Burger open={show} setOpen={setShow} />
          </div>
          <Sidebar show={show} setShow={setShow} />
        </div>

        <div className="flex flex-col gap-[6vh]">
          <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
            <p className="text-2xl font-extrabold tracking-wide">Facebook </p>
            <p className="text-[#0F56B3] text-base font-bold">
              First Item / Second Item / Third Item
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="font-extrabold font-IBM-Sans text-xl tracking-wide">
              <p>Kindly login to your faceboook account</p>
            </div>
            <div className="flex justify-center w-[70vw]">
              <div className="w-[40vw] h-[60vh] bg-[#f3b641] shadow-2xl rounded-2xl overflow-y-hidden my-10 mx-auto">
                <form
                  onSubmit={onSubmit}
                  className="w-full h-full bg-white  py-5 mt-5 "
                >
                  <div className="flex flex-col gap-[3vh] justify-center items-center p">
                    <div className="flex flex-col gap-4 justify-center items-center pb-2">
                      <input
                        type="text"
                        className="w-[30vw] p-4 outline-none  "
                        placeholder="Email or phone number"
                        style={{
                          color: "#818181",
                          background: "#f6f5f6",
                          border: "2px solid grey",
                          borderRadius: "8px",
                        }}
                      />
                      <input
                        type="password"
                        className="w-[30vw] p-4 outline-none  "
                        placeholder="Password"
                        style={{
                          color: "#818181",
                          background: "#f6f5f6",
                          border: "2px solid grey",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="text-white text-lg  flex justify-center items-center w-[30vw] bg-[#1877F2] p-3 font-IBM-Sans rounded-xl tracking-wide font-semibold"
                      >
                        Login
                      </button>
                    </div>
                    <div>
                      <p className="text-[#1877F2] text-lg">Forgot Password?</p>
                    </div>
                    <div className="border-[#8A8D91] w-[30vw] border-b-2" />
                    <div>
                      <button
                        type="submit"
                        className="text-white text-lg  flex justify-center items-center w-[30vw] bg-[#42B72A] p-3 font-IBM-Sans rounded-xl tracking-wide font-semibold"
                      >
                        Create new account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FbLogin;
