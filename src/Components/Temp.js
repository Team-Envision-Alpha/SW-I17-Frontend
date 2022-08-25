import React, { useEffect, useState } from "react";
import Tempcomponent from "../Components/Tempcomponents";
import { gql, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";

const Temp = () => {
  const [filterdata, setFilterData] = useState("");
  const ACTIVITYLOG_QUERY = gql`query {getLogs {message id  type  timestamp user_id user_name}}`  
  const { loading, err, data } = useQuery(ACTIVITYLOG_QUERY);


if (err) {
    console.log("err", err);
    toast.error("Error: Cannot get Activity Log", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
else if (!loading) {
    console.log(data)
    
}
  return (
    <>
     <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      <div className="flex flex-col justify-center items-center gap-10 font-IBM-Sans px-8 py-10">
        <div className="justify-center bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10 mx-auto lg:mx-[5vw]">
          <div className="w-full h-full py-5 mt-5 bg-gray-100 px-10 pb-20 justify-center ">
            <div className="flex flex-col ">
              <p className="text-center text-xl font-bold"> RECENT ACTIVITY </p>
              <div className="flex flex-col h-[50vh] w-[30vw] gap-4 overflow-auto p-5 px-7 scrollbar-hide">
              {data?.getLogs?.map((log)=>(
                <Tempcomponent log={log} key={log.id}/>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Temp;
