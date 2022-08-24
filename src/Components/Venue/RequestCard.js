import React from "react";
import calendar from "../../Assets/Images/calendar.png";
const RequestCard = (props) => {
    return (
        <>
            <div className="w-64 m-8 border-2 border-gray-400 bg-gray-100 shadow-lg shadow-gray-500/50">
                <div className="flex flex-row m-4 gap-4">
                    <img src={calendar} alt="calendar" />
                    <p className="font-bold"> {props.event.name}</p>
                </div>
                <div>
                    <p className="max-w-full mx-4 text leading-6 font-IBM-Sans   ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </p>
                </div>
                <div className="">
                    <button className="float-left ml-4 bg-white text-red-600 font-bold p-1 mt-2 rounded-lg h">
                        decline
                    </button>
                    <button
                        className="float-right mr-4 hover:bg-green-700 text-white font-bold py-1 mb-2 mt-2 px-2 rounded-lg h"
                        style={{ backgroundColor: "#1F8B24" }}
                    >
                        accept
                    </button>
                </div>
            </div>
            <div className="w-64 m-8 border-2 border-gray-400 bg-gray-100 shadow-lg shadow-gray-500/50">
                <div className="flex flex-row m-4 gap-4">
                    <img src={calendar} alt="calendar" />
                    <p className="font-bold"> Event Request</p>
                </div>
                <div>
                    <p className="max-w-full mx-4 text leading-6 font-IBM-Sans   ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </p>
                </div>
                <div className="">
                    <button className="float-left ml-4 bg-white text-red-600 font-bold p-1 mt-2 rounded-lg h">
                        decline
                    </button>
                    <button
                        className="float-right mr-4 hover:bg-green-700 text-white font-bold py-1 mb-2 mt-2 px-2 rounded-lg h"
                        style={{ backgroundColor: "#1F8B24" }}
                    >
                        accept
                    </button>
                </div>
            </div>
            <div className="w-64 m-8 border-2 border-gray-400 bg-gray-100 shadow-lg shadow-gray-500/50">
                <div className="flex flex-row m-4 gap-4">
                    <img src={calendar} alt="calendar" />
                    <p className="font-bold"> Event Request</p>
                </div>
                <div>
                    <p className="max-w-full mx-4 text leading-6 font-IBM-Sans   ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </p>
                </div>
                <div className="">
                    <button className="float-left ml-4 bg-white text-red-600 font-bold p-1 mt-2 rounded-lg h">
                        decline
                    </button>
                    <button
                        className="float-right mr-4 hover:bg-green-700 text-white font-bold py-1 mb-2 mt-2 px-2 rounded-lg h"
                        style={{ backgroundColor: "#1F8B24" }}
                    >
                        accept
                    </button>
                </div>
            </div>
        </>
    );
};
export default RequestCard;
