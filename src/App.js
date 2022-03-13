import React, { useEffect } from "react";
import Login from "./Components/Login";
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
      <Login />
    </>
  );
};

export default App;
