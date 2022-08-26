import React, { useEffect } from "react";
import logo from "../Assets/Images/logo.svg";
import hands from "../Assets/Images/hands.svg";
import {useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate()
    return (
        <>
     <div className="flex flex-col gap-4 items-center justify-center">
     <div>
        <img src={logo} alt="logo" className="w-[32vw] h-[15vh] mt-16" />
     </div>
     <div>
        <p className="font-bold text-[50px]"> Welcome To The Portal</p>
     </div>
<div>
    <img src={hands} alt="namaste"/>
</div>
<div className="text-center">
<p className="font-bold text-xl text-sky-600 ml-32 mr-32 text-wrap"> Our Objective is to <span className="text-orange-400">Promote Quality </span>in
Technical Education,<span className="text-orange-400"> Plan and Coordinate</span> Development
of Technical Education System,<span className="text-orange-400"> Regulate and Maintain</span> the
Norms and Standards.</p>
</div>
<div>
<a href="/" className="text-sky-600 font-bold"> Have a look around in the portal</a>
</div>
<div className="flex items-center gap-16">
<div>
<button class="float-left px-8 ml-10 bg-white text-red-600 border-red-600 border-2 font-bold p-1 mt-2 rounded-lg h"
onClick={()=>navigate("/login")}>
                      Log In
                    </button>
                    </div>
                    <div>

                   <button
                      class="hover:bg-green-700 px-8 text-white font-bold p-1 pb-2 mb-2 mt-2 rounded-lg h"
                      style={{ backgroundColor: "#1F8B24" }}
                      onClick={()=>navigate("/tour")}
                    >
                      Next
                    </button>
                    </div>
</div>

</div>
       
        </>
    )
};

export default Welcome;
