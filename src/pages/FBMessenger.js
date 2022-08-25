/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from 'axios'
const FbAccount = () => {
    
    //   const navigate = useNavigate();
    const [pageData, setPageData] = useState();
    console.log(pageData);

    const { id } = useParams();


    return (
        <>
            <div
                // style={{ backgroundImage: `url(${bg})` }}
                className="flex gap-[24vw] h-[100vh]"
            >
                {/* <div>
                    <Navbar />
                    <div className="md:hidden block absolute z-50">
                        <Burger open={show} setOpen={setShow} />
                    </div>
                    <Sidebar show={show} setShow={setShow} />
                </div> */}

                <div className="flex flex-col gap-[8vh]">
                    <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
                        <p className="text-2xl font-extrabold tracking-wide">Facebook</p>
                        <p className="text-[#0F56B3] text-base font-bold">
                            First Item / Second Item / Third Item
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FbAccount;
