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
import axios from "axios";

const User = () => {
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  const [formdata, setFormData] = useState({image:"",venue_head:user.id,name:"",email:"",phone:"",city:"",state:"",address:"",pincode:"",capacity:"",website:""});
  const fields = ['name','email','phone','city','state','address','pincode','capacity','website']
  const [image,setImage] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  }
  const getImageUrl = async(image) => {
    const data = new FormData();
    data.append("image", image);
    // console.log(image);
    const res = (await axios.post('https://envisionalpha.aaruush.org/upload/venues',data)).data
    console.log(res);
    return res.data;
  }
  const [show, setShow] = useState(false);
  const VENUE_MUTATION = gql`
    mutation registerVenue(
      $name: String!
      $email: String!
      $venue_head: ID!
      $phone: String!
      $city: String!
      $state: String!
      $address: String!
      $pincode: String!
      $capacity: String!
      $image: String!
      $website: String!
    ) {
      registerVenue(
        name: $name
        email: $email
        venue_head: $venue_head
        phone: $phone
        city: $city
        state: $state
        address: $address
        pincode: $pincode
        capacity: $capacity
        image: $image
        website: $website
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
  const onSubmit = async(e) => {
    e.preventDefault();
    const url = await getImageUrl(image);
    setFormData({ ...formdata, image: url });
    console.log(formdata);
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
              {fields.map((field,index)=>

                  <div className="flex flex-col gap-4">
                    <h4 className="capitalize">{field}</h4>
                    <input
                      type="text"
                      className="w-full p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#f6f5f6",
                        border: "2px solid grey",
                        borderRadius: "8px",
                      }}
                      name={field}
                      placeholder="Text here"
                      value={formdata[field]}
                      onChange={handleChange}
                    />
                  </div>
            )}
              {/* image  */}
              <div className="flex flex-col gap-4">
                    <h4 className="capitalize">Photo</h4>
                    <input
                      type="file"
                      className="w-full p-4 outline-none"
                      style={{
                        color: "#818181",
                        background: "#f6f5f6",
                        border: "2px solid grey",
                        borderRadius: "8px",
                      }}
                      name="image"  
                      accept="image/*"
                      onChange={handleImage}
                    />
                  </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  {/* <h4 className="invisible">Department</h4> */}
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