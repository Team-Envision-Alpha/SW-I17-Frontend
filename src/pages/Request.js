import React, { useState } from "react";
import calendar from "../Assets/Images/calendar.png";
//import Navbar from "../Components/Navbar";
import ReqCard from "../Components/Reqcard";
const Req = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>

  <div className="h-[100vh] bg-cover flex justify-center items-center">
      

      
                    <div className="justify-center  flex flex-wrap">
                        <ReqCard name="View" />
                        <ReqCard name="View" />
                        <ReqCard name="View" />
                        <ReqCard name="View" />
                        <ReqCard name="View" />
                        <ReqCard name="View" />
                     
     </div>
  </div>
  
    </>
  );
};
export default Req;