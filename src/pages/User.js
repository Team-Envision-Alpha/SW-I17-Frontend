import React from "react";
import bg from "../Assets/Images/Group.svg";
import Navbar from "../Components/Navbar";

const User = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="flex flex-col gap-10 font-IBM-Sans px-8 my-10">
          <div>
            <p className="text-[3vh] font-IBM-Sans ">Registration</p>
          </div>
          <form action="/">
            <div className="grid grid-cols-2 gap-20 items-center justify-center px-40">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h4>Event Name</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Email address</h4>
                  <input
                    type="email"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Password</h4>
                  <input
                    type="password"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h4>Role</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Department</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#E0E0E0",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <h4 className="invisible">Department</h4>
                  <button
                    type="submit"
                    className="w-full p-4 outline-none text-white bg-green-700 hover:bg-green-100 hover:outline-green-800 hover:text-black hover:text-[3vh] hover:p-3 hover:transition-all hover:duration-500 ease-out"
                    style={{
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default User;
