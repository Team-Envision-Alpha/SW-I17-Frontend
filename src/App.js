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
// import ActivityLog from "./pages/ActivityLog";
import Chat from "./Components/Chat";
import MassMailer from "./pages/MassMailer";
import MeetingRoom from "./pages/MeetingRoom";
import Report from "./pages/Report";
import Feedback from "./pages/Feedback";
// import Star from "./Components/Starcomponent";
import Home from "./pages/Home";
import VenueDashboard from "./pages/VenueDashboard";
import ErrorPage from "./pages/Errorpage";
import Global from "./pages/Global";
import Temp from "./Components/Temp";
import ActivityDash from "./pages/ActivityDashboard";
import CommunicationDash from "./pages/CommunicationDashboard";
import EventDash from "./pages/EventDashboard";
import VenueDash from "./pages/VenueDashboardcomp";
import UserDash from "./pages/UserDashboard";


import SingleEvent from "./pages/singleEvent";
const App = () => {
  const aicteuser = localStorage.getItem("aicteuser");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>{aicteuser ? <Navigate to="/dashboard" /> : <Login />}</>
            }
          />
          <Route path="/eventdashboard" element={<EventDash />} />
          <Route path="/activitydashboard" element={<ActivityDash />} />
          <Route path="/communicationdashboard" element={<CommunicationDash />} />
          <Route path="/userdashboard" element={<UserDash />} />
          <Route path="/venuedashboard" element={<VenueDash />} />
          {aicteuser ? (
            <>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/events"
                element={
                  <Global heading="Add Events">
                    <Event />
                  </Global>
                }
              />
              <Route
                path="/user_registration"
                element={
                  <Global heading="User Registration">
                    <User />
                  </Global>
                }
              />
              <Route
                path="/department_registration"
                element={
                  <Global heading="Add New Department">
                    <Department />
                  </Global>
                }
              />
              <Route
                path="/getevent/:id"
                element={
                  <Global heading="View Event Detail">
                    <SingleEvent />
                  </Global>
                }
              />
              <Route
                path="/requests"
                element={
                  <Global heading="Event Requests">
                    <EventReq />
                  </Global>
                }
              />
              <Route
                path="/edituser"
                element={
                  <Global heading="Edit User">
                    <EditUser />
                  </Global>
                }
              />
              <Route
                path="/venues"
                element={
                  <Global heading="View Venues">
                    <ViewVenues />
                  </Global>
                }
              />
              <Route
                path="/invited_event"
                element={
                  <Global heading="Invited Events">
                    <InvitedEvent />
                  </Global>
                }
              />
              <Route
                path="/add_venue"
                element={
                  <Global heading="Add Venues">
                    <VenueDetails />
                  </Global>
                }
              />
              <Route
                path="/activity_log"
                element={
                  <Global heading="Activity Log">
                    <Temp />
                  </Global>
                }
              />
              <Route
                path="/mass_mailer"
                element={
                  <Global heading="Mass Mailer">
                    <MassMailer />
                  </Global>
                }
              />
              <Route
                path="/social_media"
                element={
                  <Global heading="Social Media">
                    <SocialMedia title="Social Media Dashboard" />
                  </Global>
                }
              />
              {/* social media internal */}
              <Route
                path="/fb_account"
                element={
                  <Global heading="Your Facebook Account">
                    {" "}
                    <FbAccount title="See your account" />
                  </Global>
                }
              />
              <Route
                path="/fb_page/:id"
                element={
                  <Global heading="Your Facebook Page">
                    {" "}
                    <FacebookMain title="Check Post"></FacebookMain>
                  </Global>
                }
              />


              <Route
                path="/twitter_main"
                element={
                  <Global heading="Your Twitter Page">
                    {" "}
                    <TwitterMainPage title="Twitter Page"></TwitterMainPage>
                  </Global>
                }
              />
              {/* 
          <Route path="/events" element={<Event />} />
          
          <Route path="/dashboard" element={<DashBoard />} />
        
          <Route path="/user_registration" element={<User />} />
          <Route path="/requests" element={<EventReq />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/venues" element={<ViewVenues />} />
          <Route path="/event_modal" element={<EventModal />} />
          <Route path="/invited_event" element={<InvitedEvent />} />
          <Route path="/add_venue" element={<VenueDetails />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/star" element={<Star />}/>
      
          <Route
            path="/canteen"
            element={<Canteen eventName="Blockchain Workshop" />}
          />
          <Route
            path="/event_and_venue_details"
            element={<EventAndVenueDetails />}
          />
 */}

              {/*  */}

              <Route
                path="/meeting_room"
                element={<MeetingRoom title="Meeting Room"></MeetingRoom>}
              />
              <Route
                path="/chat"
                element={
                  <Global heading="AICTE Chat Room">
                    <Chat title="Chat Room" />
                  </Global>
                }
              />
              <Route
                path="/report"
                element={<Global heading="Event Reports"><Report title="see report"/></Global>}
              />

              <Route path="/feedback" element={<Feedback />} />

              <Route path="/venue_dashboard" element={<VenueDashboard />} />
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
