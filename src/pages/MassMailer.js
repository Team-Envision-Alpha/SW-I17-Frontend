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

const MassMailer = () => {
    const roles = ["admin", "user", "team-head", "venue-head", "social-team"];
    const [show, setShow] = useState(false);
    const [submitstate, setSubmitstate] = useState(true);

    const animatedComponents = makeAnimated();
    const allemails = []

    const USER_QUERY = gql`
    query {
      getUsers{
        email
      }
    }
  `;

    const users = useQuery(USER_QUERY);
    if (!users.loading) {
        console.log(users.data.getUsers);
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

        },
        variables: formdata,
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
            <div style={{ backgroundImage: `url(${bg})` }}>
                <Navbar />
                <div className="md:hidden block absolute z-50">
                    <Burger open={show} setOpen={setShow}></Burger>
                </div>
                <Sidebar show={show} setShow={setShow} />
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
                <div className="flex flex-col gap-10 font-IBM-Sans px-8 py-10 md:ml-[28vw] lg:ml-[25vw]">
                    <div>
                        <p className="text-[3vh] font-IBM-Sans ">Mass Mailer</p>
                    </div>
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
                                <div className="flex flex-col gap-4">
                                    <h4>Select Email address</h4>
                                    {/* <input
                                        type="email"
                                        className="w-full p-4 outline-none"
                                        style={{
                                            color: "#818181",
                                            background: "#F6F5F6",
                                            border: "2px solid grey",
                                            borderRadius: "8px",
                                        }}
                                        placeholder="Text here"
                                        value={formdata.email ? formdata.email : ""}
                                        onChange={(e) => {
                                            setFormData({ ...formdata, email: e.target.value });
                                        }}
                                    /> */}

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
