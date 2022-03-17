import React from "react";
import Login from "./Components/Login";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import FB from "./Components/Facebook/FBLogin";
import Twitter from "./Components/Twitter/twitter.js";
import { gql, useQuery } from "@apollo/client";
import SocialPanel from "./pages/SocialPanel.js";
import Venue from "./pages/Venue";
import DashBoard from "./pages/DashBoard.js";
import User from "./pages/User";
import EventReq from "./pages/EventReq";
import EventModal from "./Components/EventModal";

const App = () => {
  const HELLO = gql`
    query {
      hello
    }
  `;
  const { loading, error, data } = useQuery(HELLO);
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/fb" element={<FB />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/social" element={<SocialPanel />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/user_registration" element={<User />} />
          <Route path="/event_request" element={<EventReq />} />
        </Routes>
      </Router> */}
      <EventModal />
    </>
  );
};

export default App;
