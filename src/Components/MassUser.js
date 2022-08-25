/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import bg from "../Assets/Images/Group.svg";
// import Navbar from "../Components/Navbar";
import Select from "./Select";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Sidebar from "../Components/Sidebar";
// import Navbar from "../Components/NewNavbar";
// import Burger from "../Components/burger";
import * as XLSX from "xlsx";

import { validateEmail, validatePhone, validatePassword } from "../validate";

const User = () => {
    const roles = ["admin", "user", "team-head", "venue-head", "social-team"];

    const [submitstate, setSubmitstate] = useState(true);
    const [extrausers, setExtraUsers] = useState([]);
    console.log(extrausers);

    function arrayRemove(arr, value) {
        if (arr.length === 1) {
            return "empty";
        } else {
            return arr.filter(function (ele) {
                return ele !== value;
            });
        }
    }
    function readAppendFile(f) {
        // console.log(f);
        var name = f.name;
        const reader = new FileReader();
        reader.onload = (evt) => {
            // evt = on_file_select event
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            /* Update state */
            // console.log("Data>>>" + data); // shows that excel data is read
            // console.log(convertToJson(data));
            setExtraUsers([...extrausers, ...convertToJson(data)]); // shows data in json format
        };
        reader.readAsBinaryString(f);
    }

    function convertToJson(csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);
        }

        return result; //JavaScript object
        // return JSON.stringify(result); //JSON
    }


    const [formdata, setFormData] = useState({});
    const REGISTER_MUTATION = gql`
    mutation CreateMassUsers($users: String!) {
        createMassUsers(users: $users)
      }
      
  `;

    const [register, { loading }] = useMutation(REGISTER_MUTATION, {
        onError: (err) => {
            console.log(err);
            toast.success(`User registered successfully!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // toast.error("Error: User Not Registered!", {
            //     position: "top-center",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
        },
        onCompleted: (data) => {
            console.log(data);
            toast.error("Error: User Not Registered!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // toast.success(`User registered successfully!`, {
            //     position: "top-center",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });

        },

        variables: { users: JSON.stringify(JSON.stringify(extrausers)) },
    });
    const onSubmit = (e) => {
        console.log(formdata);
        e.preventDefault();
        if(extrausers){
            register();
        }

    };

    return (
        <>
            <div>
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
                <div className="flex flex-col gap-10 font-IBM-Sans px-8 py-10 ">
                    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-scroll my-10 mx-auto lg:mx-[5vw]">
                        <form
                            onSubmit={onSubmit}
                            className="w-full h-full py-5 mt-5 bg-white px-10"
                        >

                            <div className=" mt-4 flex flex-col justify-center text-center object-center mx-auto place-content-center">
                                Upload file for email list<br></br>
                                <input
                                    type="file"
                                    className="mt-8 block w-full text-sm text-slate-500 place-content-center ml-[35%]
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-blue-50 file:text-blue-700
                                            hover:file:bg-violet-100"
                                    onChange={(e) => {
                                        readAppendFile(e.target.files[0]);
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <h4 className="invisible">Submit</h4>
                                <button
                                    className="w-full p-4 outline-none disabled:bg-red-200 text-2xl text-white bg-green-700 transition-all duration-500 ease-out"
                                    style={{
                                        borderRadius: "8px",
                                    }}
                                    placeholder="Text here"
                                    type="submit"

                                >
                                    Submit
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;