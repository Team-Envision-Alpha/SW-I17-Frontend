/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import bg from "../Assets/Images/Group.svg";
import Select from "../Components/Select";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/NewNavbar";
import Burger from "../Components/burger";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import * as XLSX from "xlsx";

const MassMailer = () => {
    const roles = ["admin", "user", "team-head", "venue-head", "social-team"];
    
    const [submitstate, setSubmitstate] = useState(true);

    const animatedComponents = makeAnimated();
    const allemails = []

    const [addemail, setaddemail] = useState("")

    const [extraemails, setExtraEmails] = useState([]);
    console.log(extraemails);


    function readAppendFile(f) {
        var name = f.name;
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            setExtraEmails([...extraemails, ...convertToJson(data)]); // shows data in json format
        };
        reader.readAsBinaryString(f);
    }

    function convertToJson(csv) {
        var lines = csv.split("\n");
        var result = [];
        for (var i = 1; i < lines.length; i++) {
            result.push(lines[i]);
        }
        return result;
    }

    function arrayRemove(arr, value) {
        if (arr.length === 1) {
            return "empty";
        } else {
            return arr.filter(function (ele) {
                return ele !== value;
            });
        }
    }









    const USER_QUERY = gql`
    query {
      getUsers{
        email
      }
    }
  `;

    const users = useQuery(USER_QUERY);
    if (!users.loading) {
        users?.data?.getUsers.map((user) => (
            allemails.push(user.email)
        ))
    }


    var regdoptions = [
        "sahajghatiya531.sg@gmail.com", "divyanshukaushik44@gmail.com", "sg5429@srmist.edu.in"
    ];

    const [formdata, setFormData] = useState({});
    const REGISTER_MUTATION = gql`
    mutation massMailer(
      $emails: [String]!
      $subject: String!
      $text: String!
    ) {
      massMailer(
          emails: $emails
            subject: $subject
            text: $text
      )
    }
  `;



    const [register, { loading }] = useMutation(REGISTER_MUTATION, {
        onError: (err) => {
            toast.error("Error: MassMailer Error", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
        onCompleted: (data) => {
            toast.success(`MassMailer sent successfully!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setFormData({});
            setExtraEmails([])

        },
        variables: { subject: formdata.subject, text: formdata.text, emails: extraemails },
    });
    const onSubmit = (e) => {
        e.preventDefault();
        register();
    };






    const getobjects = (obj) => {
        const newobj = obj?.map((data) => { return ({ label: data, value: data }) });
        return newobj
    }

    const getstring = (obj) => {
        const array = obj?.map((data) => { return data.value })
        return array
    }

    return (
        <>
            <div >
                {/* <Navbar />
                <div className="md:hidden block absolute z-50">
                    <Burger open={show} setOpen={setShow}></Burger>
                </div>
                <Sidebar show={show} setShow={setShow} /> */}
                {/* <Navbar /> */}
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
                <div className="flex flex-col gap-10 font-IBM-Sans px-8 py-10">
               
                    <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10 mx-auto lg:mx-[5vw]">
                        <form
                            onSubmit={onSubmit}
                            className="w-full h-full py-5 mt-5 bg-white px-10 pb-20"
                        >
                            {/* <div className="grid grid-cols-2 gap-20 items-center justify-center px-40"> */}
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-4">
                                    <h4>Subject</h4>
                                    <input
                                        type="text"
                                        className="w-full p-4 outline-none"
                                        style={{
                                            color: "#818181",
                                            background: "#F6F5F6",
                                            border: "2px solid grey",
                                            borderRadius: "8px",
                                        }}
                                        value={formdata.subject ? formdata.subject : ""}
                                        placeholder="Text here"
                                        onChange={(e) => {
                                            setFormData({ ...formdata, subject: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4>Text</h4>
                                    <input
                                        type="text"
                                        className="w-full p-4 outline-none"
                                        style={{
                                            color: "#818181",
                                            background: "#F6F5F6",
                                            border: "2px solid grey",
                                            borderRadius: "8px",
                                        }}
                                        value={formdata.text ? formdata.text : ""}
                                        placeholder="Text here"
                                        onChange={(e) => {
                                            setFormData({ ...formdata, text: e.target.value });
                                        }}
                                    />
                                </div>

                                {/* <div className="flex flex-col gap-4">
                                    <h4>Select Email address</h4>
                                    <CreatableSelect
                                        closeMenuOnSelect={false}
                                        isMulti
                                        components={animatedComponents}
                                        options={getobjects(allemails)}

                                        className="w-full p-4 outline-none"
                                        styles={{
                                            color: "#818181",
                                            background: "#F6F5F6",
                                            border: "2px solid grey",
                                            borderRadius: "8px",
                                        }}
                                        value={getobjects(formdata.emails)}
                                        onChange={(e) => {
                                            setFormData({ ...formdata, emails: getstring(e) });
                                        }}
                                    />
                                </div> */}


                                <div>
                                    <h3 className="mx-auto text-left mb-5">
                                        Add Email to Mass Email List
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex flex-col gap-4">
                                            <input
                                                type="email"
                                                className="w-[full] p-4 outline-none"
                                                style={{
                                                    color: "#818181",
                                                    background: "#F6F5F6",
                                                    border: "2px solid grey",
                                                    borderRadius: "8px",
                                                }}
                                                placeholder="Email"
                                                name="email"
                                                value={addemail}
                                                onChange={(e) => {
                                                    setaddemail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div
                                                className="w-[full] p-4 outline-none text-center rounded-[8px] bg-black text-white cursor-pointer"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (addemail) {
                                                        setExtraEmails([...extraemails, addemail]);
                                                        setaddemail("")
                                                    }
                                                }}
                                            >
                                                Submit
                                            </div>
                                        </div>
                                    </div>

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
                                    <hr className="mt-5"></hr>
                                    <table className="w-full mt-5 ">
                                        <thead>
                                            <tr
                                                className="text-md font-semibold   text-gray-900   border-[#B9B9B9]  text-center border-3"
                                                style={{ background: "rgba(0, 0, 0, 0.05)" }}
                                            >
                                                <th className="py-3  border-[#B9B9B9] border-2">Email</th>
                                                <th className="py-3 border-[#B9B9B9] border-2">Modify</th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            className=" max-h-[40vh] overflow-scroll"
                                            style={{ maxHeight: "30vh", overflowY: "scroll" }}
                                        >
                                            {extraemails &&
                                                extraemails.reverse().map((email, idx) => {
                                                    return (
                                                        <tr className="text-[#000000] odd:bg-white even:bg-slate-100">

                                                            <td className="text-center py-3 text-md  border-[#B9B9B9] border-2">
                                                                <div>
                                                                    <p>{email}</p>
                                                                </div>
                                                            </td>

                                                            <td className="text-center py-3 text-md border-[#B9B9B9] border-2 ">
                                                                <div>
                                                                    <p
                                                                        className="text-[#874439] font-bold cursor-pointer hover:underline transition"
                                                                        onClick={() => {
                                                                            const resp = arrayRemove(extraemails, email);
                                                                            if (resp !== "empty") {
                                                                                setExtraEmails(resp);
                                                                            } else {
                                                                                setExtraEmails([]);
                                                                            }
                                                                        }}
                                                                    >
                                                                        Delete
                                                                    </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>


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
                                        disabled={!submitstate}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                            {/* </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MassMailer;
