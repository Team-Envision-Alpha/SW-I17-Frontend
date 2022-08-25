/* eslint-disable no-unused-vars */

import React, { useState, useEffect, Suspense,lazy } from "react";
import Login from "./Components/Login";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
// import FB from "./Components/Facebook/FBLogin";
// import Twitter from "./Components/Twitter/twitter.js";
import { gql, useQuery } from "@apollo/client";
import SocialPanel from "./pages/SocialPanel.js";
import OldEvents from "./pages/Events";
import DashBoard from "./pages/DashBoard";
import User from "./pages/User";
import EventReq from "./pages/EventReq";
import Event from "./pages/NewEvent";
import InvitedEvent from "./pages/InvitedEvent";
import EventModal from "./Components/EventModal";
import VenuHeadDashboard from "./pages/VenuHeadDashboard";
import VenueDetails from "./pages/VenuDetails";
import EventAndVenueDetails from "./pages/EventAndVenueDetails";
import EditUser from "./pages/Editusers";
import Canteen from "./pages/Canteen";
import SocialAnalytics from "./pages/SocialAnalytics";
import ViewVenues from "./pages/ViewVenue";
import FbAccount from "./pages/FbAccount";
import FbLogin from "./pages/FbLogin";
import SocialMedia from "./pages/SocialMedia";
import FacebookPage from "./pages/FacebookPage";
import DivChat from "./pages/DivChat";
import FacebookMain from "./pages/FbMainPage";
import TwitterMainPage from "./pages/TwitterMainPage";
import ActivityLog from "./pages/ActivityLog";
import TwiChat from "./pages/TwiChat";
import MassMailer from "./pages/MassMailer";
import MeetingRoom from "./pages/MeetingRoom";
import Report from "./pages/Report";
import Feedback from "./pages/Feedback";
import Star from "./Components/Starcomponent";


const App = () => {
  // const [longlivedaccesstoken, setLonglivedaccesstoken] = useState(null);

  // useEffect(() => {
  //   if (localStorage.getItem("longlivedaccesstoken")) {
  //     setLonglivedaccesstoken(localStorage.getItem("longlivedaccesstoken"));
  //   }
  // }, [])

  const aicteuser = localStorage.getItem("aicteuser");

  const HELLO = gql`
    query {
      hello
    }
  `;

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

          <Route path="/activity_log" element={<ActivityLog />} />
          <Route path="/mass_mailer" element={<MassMailer />} />

          <Route
            path="/social_media"
            element={<SocialMedia title="Social Media Dashboard"></SocialMedia>}
          />

          <Route
            path="/fb_account"
            element={
              <>
                {localStorage.getItem("longlivedaccesstoken") ? (
                  <FbAccount title="See your account"></FbAccount>
                ) : (
                  <Navigate to="/social_media" replace={true} />
                )}
              </>
            }
          />
          <Route
            path="/fb_main/:id"
            element={<FacebookMain title="Check Post"></FacebookMain>}
          />
          <Route
            exact
            path="/facebookpage/:id"
            element={<FacebookPage title="Facebook Page"></FacebookPage>}
          />
          <Route exact path="/divchats" element={<DivChat />} />

          <Route
            path="/twitter_main"
            element={<TwitterMainPage title="Twitter Page"></TwitterMainPage>}
          />
          <Route
            path="/meeting_room"
            element={<MeetingRoom title="Meeting Room"></MeetingRoom>}
          />
          <Route path="/chat" element={<TwiChat title="chats"></TwiChat>} />
          <Route
            path="/report"
            element={<Report title="see report"></Report>}
          />
       

          {/* <Route
            path="/social_analytics"
            element={
              <SocialAnalytics title="Analytics Per Post" aspect={2 / 1} />
            }
          /> */}
          {/* <Route
            path="/fb_login"
            element={<FbLogin title="Log in to facebook"></FbLogin>}
          /> */}
          {/* <Route path="/fb" element={<FB />} /> */}
          {/*        <Route path="/twitter" element={<Twitter />} /> */}
          {/* <Route path="/social" element={<SocialPanel />} /> */}
          <Route path="/oldevents" element={<OldEvents />} />
          {/* <Route path="/venue_head_dashboard" element={<VenuHeadDashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
