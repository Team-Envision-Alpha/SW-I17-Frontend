import React, { useEffect, useState } from "react";
import logo from "../Assets/Images/logo.svg";
import Tourcarousel from "../Components/Tourcarousel";
const TourPage= () => {

    return (
        <>
        <div className="flex flex-col gap-4 items-center justify-center">
           <div>
            <img src={logo} alt="logo" className="w-[32vw] h-[15vh] mt-16"  />
           </div>
           <div>
           <Tourcarousel />
           </div>
           <div className="flex items-center gap-16">
<div>
<button class="float-left px-16 ml-10 bg-white text-green-700 border-green-700 border-2 font-bold p-1 mt-2 rounded-lg h">
                      skip
                    </button>
                    </div>
                    <div>
                   <button
                      class="hover:bg-green-700 px-16 text-white font-bold p-1 pb-2 mb-2 mt-2 rounded-lg h"
                      style={{ backgroundColor: "#1F8B24" }}
                    >
                      next
                    </button>
                    </div>
</div>

        </div>
        </>
    );
};
export default TourPage;
