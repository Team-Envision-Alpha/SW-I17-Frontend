/* eslint-disable no-unused-vars */

import React, { useState, useEffect, Suspense, lazy } from "react";
import Login from "./Components/Login";

import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import DashBoard from "./pages/DashBoard.js";

import User from "./pages/User";
import Department from "./pages/newDepartment";
import EventReq from "./pages/EventReq";
import Event from "./pages/NewEvent";
import InvitedEvent from "./pages/InvitedEvent";
import VenueDetails from "./pages/VenuDetails";
import EditUser from "./pages/Editusers";
import ViewVenues from "./pages/ViewVenue";
import FbAccount from "./pages/FbAccount";
import SocialMedia from "./pages/SocialMedia";
import FacebookMain from "./pages/FbMainPage";
import TwitterMainPage from "./pages/TwitterMainPage";
import ActivityLog from "./pages/ActivityLog";
import Chat from "./Components/Chat";
import MassMailer from "./pages/MassMailer";
import MeetingRoom from "./pages/MeetingRoom";
import Report from "./pages/Report";
import Feedback from "./pages/Feedback";
import Star from "./Components/Starcomponent";
import Home from "./pages/Home";
import VenueDashboard from "./pages/VenueDashboard";

import ErrorPage from "./pages/Errorpage";
import Global from "./pages/Global";
import Temp from "./Components/Temp";
import Requests from "./pages/Request";
import Welcome from "./pages/Welcome";
import TourPage from "./pages/Tourpage";
import CreateOrg from "./pages/NewOrg";
import SingleEvent from "./pages/singleEvent";

const App = () => {
  const aicteuser = localStorage.getItem("aicteuser");

  function checkPermission(group) {
    const aicteuser = localStorage.getItem("aicteuser");
    if (aicteuser) {
      const user = JSON.parse(aicteuser);
      if (group.includes(user.role)) {
        return true;
      }
      return false;
    }
    return false;
  }

  const groups = [
    ['aicte', 'poc'],
    ['aicte', 'poc', 'admin'],
    ['aicte', 'poc', 'admin', 'social'],
    ['aicte', 'poc', 'admin', 'venue'],
    ['aicte', 'poc', 'admin', 'social', 'venue'],
    ['aicte', 'poc', 'admin', 'venue', 'social', 'user'],
    ['aicte']
  ]

  // console.log(checkPermission(groups[0]))

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <>{aicteuser ? <Navigate to="/dashboard" /> : <Login />}</>
            }
          />
          <Route path="/getevent/:id" element={<SingleEvent />} />
          <Route
            path="/"
            element={
              <>{aicteuser ? <Navigate to="/dashboard" /> : <Welcome />}</>
            }
          />
          <Route
            pat="/create_organisation"
            element={
              <Global heading="Create Organization" user={aicteuser}>
                <CreateOrg />
              </Global>
            }
          />
          {aicteuser ? (
            <>

              <Route
                path="/dashboard"
                element={<DashBoard user={aicteuser} />}
              />


              <Route
                path="/event_dashboard"
                element={
                  <Global heading="Event Dashboard" user={aicteuser}>
                    <Home user={aicteuser} />
                  </Global>
                }
              />
              <Route
                path="/events"
                element={
                  <Global heading="Add Events" user={aicteuser}>
                    <Event user={aicteuser} />
                  </Global>
                }
              />
              {checkPermission(groups[1]) ? (
                <Route
                  path="/user_registration"
                  element={
                    <Global heading="User Registration" user={aicteuser}>
                      <User user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}
              {checkPermission(groups[1]) ? (
                <Route
                  path="/department_registration"
                  element={
                    <Global heading="Add New Department" user={aicteuser}>
                      <Department user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}
              <Route
                path="/requests"
                element={
                  <Global heading="Event Requests" user={aicteuser}>
                    <EventReq user={aicteuser} />
                  </Global>
                }
              />
              {checkPermission(groups[1]) ? (
                <Route
                  path="/edituser"
                  element={
                    <Global heading="Edit User" user={aicteuser}>
                      <EditUser user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}
              <Route
                path="/venues"
                element={
                  <Global heading="View Venues" user={aicteuser}>
                    <ViewVenues user={aicteuser} />
                  </Global>
                }
              />
              <Route
                path="/invited_event"
                element={
                  <Global heading="Invited Events" user={aicteuser}>
                    <Home user={aicteuser} />
                  </Global>
                }
              />
              {checkPermission(groups[3]) ? (
                <Route
                  path="/add_venue"
                  element={
                    <Global heading="Add Venues" user={aicteuser}>
                      <VenueDetails user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}

              {checkPermission(groups[1]) ? (
                <Route
                  path="/activity_log"
                  element={
                    <Global heading="Activity Log" user={aicteuser}>
                      <ActivityLog user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}

              <Route
                path="/mass_mailer"
                element={
                  <Global heading="Mass Mailer" user={aicteuser}>
                    <MassMailer user={aicteuser} />
                  </Global>
                }
              />
              {checkPermission(groups[2]) ? (
                <Route
                  path="/social_media"
                  element={
                    <Global heading="Social Media" user={aicteuser}>
                      <SocialMedia
                        title="Social Media Dashboard"
                        user={aicteuser}
                      />
                    </Global>
                  }
                />
              ) : null}
              {/* social media internal */}
              {checkPermission(groups[2]) ? (
                <Route
                  path="/fb_account"
                  element={
                    <Global heading="Your Facebook Account" user={aicteuser}>
                      {" "}
                      <FbAccount title="See your account" user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}
              {checkPermission(groups[2]) ? (
                <Route
                  path="/fb_page/:id"
                  element={
                    <Global heading="Your Facebook Page" user={aicteuser}>
                      {" "}
                      <FacebookMain title="Check Post" user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}

              {checkPermission(groups[2]) ? (
                <Route
                  path="/twitter_main"
                  element={
                    <Global heading="Your Twitter Page" user={aicteuser}>
                      {" "}
                      <TwitterMainPage title="Twitter Page" user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}
              {checkPermission(groups[2]) ? (
                <Route
                  path="/req"
                  element={
                    <Global heading="Your Twitter Page" user={aicteuser}>
                      {" "}
                      <Requests title="Activity log" user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}

              <Route path="/tour" element={<TourPage user={aicteuser} />} />
              {groups[5].map((data) => (
                <Route
                  path={`/meeting_room/${data.role}`}
                  element={
                    <MeetingRoom title="Meeting Room" user={aicteuser} />
                  }
                />
              ))}

              <Route
                path="/chat"
                element={
                  <Global heading="AICTE Chat Room" user={aicteuser}>
                    <Chat title="Chat Room" user={aicteuser} />
                  </Global>
                }
              />
              {checkPermission(groups[2]) ? (
                <Route
                  path="/report"
                  element={
                    <Global heading="Event Reports" user={aicteuser}>
                      <Report title="see report" user={aicteuser} />
                    </Global>
                  }
                />
              ) : null}

              <Route
                path="/feedback"
                element={
                  <Global heading="Feedback Form" user={aicteuser}>
                    <Feedback user={aicteuser} />
                  </Global>
                }
              />

              <Route
                path="/venue_dashboard"
                element={
                  <Global heading="Venue Dashboard" user={aicteuser}>
                    <VenueDashboard user={aicteuser} />
                  </Global>
                }
              />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/404" />} />
          )}

          <Route path="*" element={<Navigate to="/404" />} />
          <Route exact path="/404" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
