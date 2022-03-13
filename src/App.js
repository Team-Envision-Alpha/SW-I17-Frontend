import React, { useEffect } from "react";
import Login from "./Components/Login";
import { 
  Routes, 
  Route, 
  BrowserRouter as Router
 } from "react-router-dom";
import FB from "./Components/FB"
import { gql,useQuery} from "@apollo/client";

const App = () => {
  const HELLO = gql`
    query{
      hello
    }
  `
  const {loading,error,data} = useQuery(HELLO)
  console.log(data)
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
