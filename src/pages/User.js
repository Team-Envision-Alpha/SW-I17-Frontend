/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import bg from "../Assets/Images/Group.svg";
// import Navbar from "../Components/Navbar";
import Select from "../Components/Select";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/NewNavbar";
import Burger from "../Components/burger";

const User = () => {
  const roles = ["admin", "user", "team-head", "venue-head", "social-team"];
  const [show, setShow] = useState(false);
  const [submitstate, setSubmitstate] = useState(true);
  const [confirmpassword, setConfrmpassword] = useState("");
  const departments = [
    "admin",
    "hr",
    "c&m",
    "finance",
    "marketing",
    "sales",
    "tech",
    "social_media"
  ];

  const [formdata, setFormData] = useState({});
  const REGISTER_MUTATION = gql`
    mutation registerUser(
      $email: String!
      $password: String!
      $role: String!
      $department: String!
      $name: String!
      $phone: String!
    ) {
      registerUser(
       
          email: $email
          password: $password
          role: $role
          department: $department
          name: $name
          phone: $phone
      ) {
        id
        name
      }
    }
  `;
  useEffect(() => {
    if (confirmpassword === formdata.password) {
      setSubmitstate(true);
    } else {
      setSubmitstate(false);
    }
  }, [confirmpassword, formdata.password]);
  const [register, { loading }] = useMutation(REGISTER_MUTATION, {
    onError: (err) => {
      console.log(err);
      toast.error("Error: User Not Registered!", {
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
      console.log(data);

      toast.success(`User registered successfully!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({});
      setConfrmpassword("");
    },
    // update(_, result) {
    //   console.log(result.data.registerUser);
    //   // localStorage.setItem("aicteuser", JSON.stringify(result.data.loginUser));
    //   setFormData({});
    // },
    variables: formdata,
  });
  const onSubmit = (e) => {
    console.log(formdata);
    e.preventDefault();
    register();
    // console.log(loading);
  };

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
            <p className="text-[3vh] font-IBM-Sans ">New User Registration</p>
          </div>
          <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10 mx-auto lg:mx-[5vw]">
            <form
              onSubmit={onSubmit}
              className="w-full h-full py-5 mt-5 bg-white px-10"
            >
              {/* <div className="grid grid-cols-2 gap-20 items-center justify-center px-40"> */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h4>Name</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#F6F5F6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    value={formdata.name ? formdata.name : ""}
                    placeholder="Text here"
                    onChange={(e) => {
                      setFormData({ ...formdata, name: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Email address</h4>
                  <input
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
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Password</h4>
                  <input
                    type="password"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#F6F5F6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    value={formdata.password ? formdata.password : ""}
                    placeholder="Text here"
                    onChange={(e) => {
                      setFormData({ ...formdata, password: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Phone</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    value={formdata.phone ? formdata.phone : ""}
                    style={{
                      color: "#818181",
                      background: "#F6F5F6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    onChange={(e) => {
                      setFormData({ ...formdata, phone: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h4 className="pt-6">Role</h4>
                  <Select
                    data={roles}
                    name="role"
                    formdata={formdata}
                    setFormData={setFormData}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Department</h4>
                  <Select
                    data={departments}
                    name="department"
                    formdata={formdata}
                    setFormData={setFormData}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <h4>Confirm Password</h4>
                  <input
                    type="password"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#F6F5F6",
                      border: `${!submitstate ? "2px solid red" : "2px solid green"
                        }`,
                      borderRadius: "8px",
                    }}
                    value={confirmpassword ? confirmpassword : ""}
                    placeholder="Text here"
                    onChange={(e) => {
                      setConfrmpassword(e.target.value);
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

export default User;
