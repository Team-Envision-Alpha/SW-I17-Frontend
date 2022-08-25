import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
export default function Global({children,heading}) {
    const [show, setShow] = useState(true)
    return (
        <div className="flex">
            <div className="w-[25vw] fixed">
                <Sidebar show={show} setShow={setShow} />
                <div className="md:hidden block">
                    <Burger open={show} setOpen={setShow} />
                </div>
            </div>

            <div className="w-[75vw] ml-[25vw]">
                <div className="flex justify-between px-3">
                    <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
                        <p className="text-2xl font-extrabold tracking-wide">{heading}</p>
                    </div>
                    {/* <div> */}
                        <Navbar />
                    {/* </div> */}
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    );

}