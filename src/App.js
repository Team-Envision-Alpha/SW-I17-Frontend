import React from "react";
import Login from "./Components/Login";
import { 
  Routes, 
  Route, 
  BrowserRouter as Router
 } from "react-router-dom";
import FB from "./Components/FB"
const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/fb" element={<FB/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;
