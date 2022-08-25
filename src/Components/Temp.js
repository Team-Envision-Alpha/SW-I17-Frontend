import React, { useEffect, useState } from "react";
import Tempcomponent from "../Components/Tempcomponents";
const Temp = () => {
return (
    <>
               <div className="flex flex-col gap-10 font-IBM-Sans px-8 py-10">
               
               <div className="w-[80w] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10 mx-auto lg:mx-[5vw]">
               <div className="w-full h-full py-5 mt-5 bg-white px-10 pb-20 justify-center ">
               <div className="flex flex-col gap-4">
             <Tempcomponent />
             <Tempcomponent />
             <Tempcomponent />
               </div>


               </div>
               </div>
               </div>
               </>
           );
            };
        export default Temp;