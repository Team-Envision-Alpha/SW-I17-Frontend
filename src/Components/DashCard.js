/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import arrow from "../Assets/Images/arrowdown.svg";
import frame1 from "../Assets/Dashboardicons/Dashboard Icons/frame1.png";
import frame2 from "../Assets/Dashboardicons/Dashboard Icons/frame2.png";
import frame3 from "../Assets/Dashboardicons/Dashboard Icons/frame3.png";
import frame4 from "../Assets/Dashboardicons/Dashboard Icons/frame4.png";
import frame5 from "../Assets/Dashboardicons/Dashboard Icons/frame5.png";
import frame6 from "../Assets/Dashboardicons/Dashboard Icons/frame6.png";
import frame7 from "../Assets/Dashboardicons/Dashboard Icons/frame7.png";
import frame8 from "../Assets/Dashboardicons/Dashboard Icons/frame8.png";
import frame9 from "../Assets/Dashboardicons/Dashboard Icons/frame9.png";
import frame10 from "../Assets/Dashboardicons/Dashboard Icons/frame10.png";
import frame11 from "../Assets/Dashboardicons/Dashboard Icons/frame11.png";
import frame12 from "../Assets/Dashboardicons/Dashboard Icons/frame12.png";
import frame13 from "../Assets/Dashboardicons/Dashboard Icons/frame13.png";
import frame14 from "../Assets/Dashboardicons/Dashboard Icons/frame14.png";
import frame15 from "../Assets/Dashboardicons/Dashboard Icons/frame15.png";
// import "./Dashcard.css";
import { Link } from "react-router-dom";

const DashCard = ({ icon, name, user, groups, checkPermission }) => {
  return (
    <>
      <div className="group flex flex-col gap-6 font-IBM-Sans sm:flex-row sm:bg-red ">
        <div className="grp w-[16vw] bg-[#fefefe] hover:scale-[1.02] hover:shadow-2xl hover:bg-[#ffffff10] hover:backdrop-blur h-[24vh] group-hover:min-h-[24vh] group-hover:h-auto rounded-xl flex flex-col justify-top pt-5 items-center gap-2 shadow-lg transition duration-100">
          <div>
            <img src={icon} alt="img" width={80} />
          </div>
          <div>
            <p className="text font-IBM-Sans  font-bold ">{name}</p>
          </div>

          <div className=" mt-5 hidden group-hover:block transition ">
            {name === "Events" ? (
              <div>
                <Link to="/events">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame1} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Add New Event</p>
                  </div>
                </Link>

                <Link to="/invited_event">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame2} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Your Invited Events</p>
                  </div>
                </Link>

                <Link to="/requests">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame3} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Your Event Requests</p>
                  </div>
                </Link>
              </div>
            ) : null}

            {name === "Venue" ? (
              <div>
                <Link to="/venues">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame4} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">View All Venues</p>
                  </div>
                </Link>
                {checkPermission(groups[3]) &&
                  <div>
                    <Link to="/add_venue">
                      <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                        <img src={frame5} className="w-[2vw]" />
                        <p className="ml-4 my-auto ">Add New Venues</p>
                      </div>
                    </Link>

                    <Link to="/venue_dashboard">
                      <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                        <img src={frame6} className="w-[2vw]" />
                        <p className="ml-4 my-auto ">View Venue Dashboard</p>
                      </div>
                    </Link>
                  </div>
                }
              </div>
            ) : null}

            {name === "Users" ? (
              <div>
                <Link to="/user_registration">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame7} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Create New User</p>
                  </div>
                </Link>
                <Link to="/edituser">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame8} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">View/Edit Users</p>
                  </div>
                </Link>
                <Link to="/department_registration">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame15} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Create New Department</p>
                  </div>
                </Link>
                {/* {checkPermission(["aicte"]) && 
                <Link to="/create_organisation">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame15} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Create New Organisation</p>
                  </div>
                </Link>
                } */}
              </div>
            ) : null}
            {name === "Activity" ? (
              <div>
                <Link to="/activity_log">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame13} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Portal Activity Log</p>
                  </div>
                </Link>
                <Link to="/report">
                  <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                    <img src={frame14} className="w-[2vw]" />
                    <p className="ml-4 my-auto ">Generate Events Report</p>
                  </div>
                </Link>
              </div>
            ) : null}
            {name === "Communication" ? (

              <div>
                {checkPermission(groups[2]) &&
                  <Link to="/social_media">
                    <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                      <img src={frame9} className="w-[2vw]" />
                      <p className="ml-4 my-auto ">Social Media</p>
                    </div>
                  </Link>
                }
                {checkPermission(groups[2]) &&
                  <Link to="/chat">
                    <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                      <img src={frame10} className="w-[2vw]" />
                      <p className="ml-4 my-auto ">AICTE Chats</p>
                    </div>
                  </Link>
                }
                {checkPermission(groups[4]) &&
                  <Link to="/mass_mailer">
                    <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                      <img src={frame11} className="w-[2vw]" />
                      <p className="ml-4 my-auto ">Mass Mailer</p>
                    </div>
                  </Link>
                }

                {checkPermission(groups[5]) &&
                  <Link to={`/meeting_room/${user.role}`}>
                    <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition mb-2 hover:scale-[1.01]">
                      <img src={frame12} className="w-[2vw]" />
                      <p className="ml-4 my-auto ">Online Meeting Room</p>
                    </div>
                  </Link>
                }

              </div>
            ) : null}
          </div>
          {/* <div className="flex flex-row px-2 py-4 rounded-xl shadow-xl bg-white hover:shadow-2xl hover:scale-[1.01]">
              <img src={frame2} className="w-[2vw]" />
              <p className="ml-4 my-auto ">Your Invited Events</p>
            </div> */}
          <img
            src={arrow}
            className="group-hover:rotate-[180deg] transition-all duration-700"
          ></img>
        </div>
      </div>
    </>
  );
};

export default DashCard;
