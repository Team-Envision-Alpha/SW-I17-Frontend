import React from "react";
// import bg from '../Assets/Images/Group.svg';

// import Navbar from '../Components/Navbar';
// import Sidebar from "../Components/Sidebar";
import polygon from "../Assets/Images/errorimg.png";

const Error = () => {
    // 
    return (    
        <>
       <div 
       className="bg-[#f8f7f8] min-h-[100vh] bg-cover">
        {/* <Navbar /> */}
        {/* <Sidebar show={show} setShow={setShow} /> */}
        <div className="pt-24 mb-10 flex flex-col gap-8  items-center justify-center">
          <div>
            <img src={polygon} className="w-48 h-48" alt="ploygon"></img>
          </div>
          <div>
            <p className="w-full text-red-700 text-5xl font-bold tracking-wider"> Page Not Found</p>
          </div>
          <div>
            <a href="/" className="w-full mt-14 p-2 px-16 text-xl bg-blue-600 text-white"  style={{
              borderRadius:"8px",
            }}
            placeholder="Return To Dashboard">
            Return To Home
            </a>
          </div>
          </div>

        </div>
        </>
        

    );
};
export default Error;