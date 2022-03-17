import React from 'react';
import Login from './Components/Login';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import FB from './Components/Facebook/FBLogin';
// import { gql, useQuery } from "@apollo/client";
import SocialPanel from './pages/SocialPanel.js';
import DashBoard from './pages/DashBoard.js';

const App = () => {
  // const HELLO = gql`
  //   query {
  //     hello
  //   }
  // `;
  // const { loading, error, data } = useQuery(HELLO);
  // console.log(data);
  // console.log(loading);
  // console.log(error);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/fb" element={<FB />} />
          <Route path="/social" element={<SocialPanel />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
