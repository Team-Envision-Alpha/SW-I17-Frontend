/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import bg from "../Assets/Images/Group.svg";
// import Navbar from "../Components/Navbar";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/NewNavbar";
import Burger from "../Components/burger";

const User = () => {
  const [formdata, setFormData] = useState({});
  const [show, setShow] = useState(false);
  const VENUE_MUTATION = gql`
    mutation addVenue(
      $name: String!
      $contact: String!
      $state: String!
      $city: String!
      $pincode: String!
      $staffcount: String!
      $capacity: String!
    ) {
      addVenue(
        venueInput: {
          name: $name
          contact: $contact
          state: $state
          city: $city
          pincode: $pincode
          staffcount: $staffcount
          capacity: $capacity
        }
      ) {
        id
        name
      }
    }
  `;
  const [venue, { loading }] = useMutation(VENUE_MUTATION, {
    onError: (err) => {
      toast.error("Error: Venue not added!", {
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

      toast.success(`Venue Added successfully!`, {
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
    venue();
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
        <div className="flex flex-col gap-6 font-IBM-Sans px-8 py-10 md:ml-[28vw] lg:ml-[25vw]">
          <div>
            <p className="text-[3vh] font-IBM-Sans ">Add New Venue</p>
          </div>
          <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10 mx-auto lg:mx-[5vw]">
            <form
              onSubmit={onSubmit}
              className="w-full h-full py-5 mt-5 bg-white px-10"
            >
              {/* <div className="grid grid-cols-2 gap-20 items-center justify-center px-40"> */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h4>Venue Name</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    name="name"
                    placeholder="Text here"
                    value={formdata.name ? formdata.name : ""}
                    onChange={(e) => {
                      setFormData({ ...formdata, name: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Venue Head Contact</h4>
                  <input
                    type="email"
                    name="contact"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    value={formdata.contact ? formdata.contact : ""}
                    onChange={(e) => {
                      setFormData({ ...formdata, contact: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Staff Count</h4>
                  <input
                    type="text"
                    name="staffcount"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    value={formdata.staffcount ? formdata.staffcount : ""}
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        staffcount: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Capacity</h4>
                  <input
                    type="text"
                    className="w-full p-4 outline-none"
                    name="capacity"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    value={formdata.capacity ? formdata.capacity : ""}
                    onChange={(e) => {
                      setFormData({ ...formdata, capacity: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h4>State</h4>
                  <input
                    type="text"
                    name="state"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    value={formdata.state ? formdata.state : ""}
                    onChange={(e) => {
                      setFormData({ ...formdata, state: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>City</h4>
                  <input
                    type="text"
                    name="city"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    value={formdata.city ? formdata.city : ""}
                    onChange={(e) => {
                      setFormData({ ...formdata, city: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4>Pincode</h4>
                  <input
                    type="text"
                    name="pincode"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
                    value={formdata.pincode ? formdata.pincode : ""}
                    onChange={(e) => {
                      setFormData({ ...formdata, pincode: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <h4 className="invisible">Department</h4>
                  <button
                    type="submit"
                    className="w-full p-4 outline-none disabled:bg-red-200 text-2xl text-white bg-green-700 transition-all duration-500 ease-out"
                    style={{
                      borderRadius: "8px",
                    }}
                    placeholder="Text here"
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
