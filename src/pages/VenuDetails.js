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

import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
const User = () => {
  const animatedComponents = makeAnimated();
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  const [formdata, setFormData] = useState({
    image: "",
    venue_head: user.id,
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    address: "",
    pincode: "",
    capacity: "",
    website: "",
  });
  const fields = [
    "name",
    "email",
    "phone",
    "city",
    "state",
    "address",
    "pincode",
    "capacity",
    "website",
  ];
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const getImageUrl = async (image) => {
    const data = new FormData();
    data.append("image", image);
    // console.log(image);
    const res = (
      await axios.post("https://envisionalpha.aaruush.org/upload/venues", data)
    ).data;
    console.log(res);
    return res.data;
  };

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
      $canteen_menu: String!
      $canteen_contact: String!
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
        canteen_menu: $canteen_menu
        canteen_contact: $canteen_contact
      ) {
        id
        name
      }
    }
  `;
  const [arr, setArr] = useState();
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
      setFormData({
        image: "",
        venue_head: user.id,
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        address: "",
        pincode: "",
        capacity: "",
        website: "",
        canteen_contact: {},
        canteen_menu: {},
      });
    },
    // update(_, result) {
    //   console.log(result.data.registerUser);
    //   // localStorage.setItem("aicteuser", JSON.stringify(result.data.loginUser));
    //   setFormData({});
    // },
    variables: formdata,
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: "1px dotted pink",
      color: state.isSelected ? "white" : "blue",
      padding: 10,
    }),
    control: (provided) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: "100%",
      background: "#f6f5f6",
      padding: "0.6rem",
      marginTop: "0.1rem",
      border: "2px solid #808080",
      borderRadius: "8px",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  function convertToArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].value);
    }
    return newArr;
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = await getImageUrl(image);
    var tempmenu = {};
    if (typeof formdata["canteen_menu"] != "string") {
      tempmenu = JSON.stringify({
        breakfast: convertToArray(formdata["canteen_menu"].breakfast),
        lunch: convertToArray(formdata["canteen_menu"].lunch),
        dinner: convertToArray(formdata["canteen_menu"].dinner),
      });
    } else {
      tempmenu = formdata.canteen_menu;
    }
    console.log(typeof formdata.canteen_contact === "object");
    // if (typeof formdata.canteen_contact === "object") {
    //   // console.log('Run ho rha hai')
    //   setFormData({
    //     ...formdata,
    //     canteen_contact: JSON.stringify(formdata.canteen_contact),
    //   });
    // }
    setFormData({
      ...formdata,
      image: url,
      canteen_menu: tempmenu,
      canteen_contact: "rishitshivesh@gmail.com",
    });
    console.log(formdata);
    venue();
    // console.log(loading);
  };
  console.log(formdata);
  return (
    <>
      <div classname="">
        {/* <Navbar />
        <Burger open={show} setOpen={setShow}></Burger>
        <Sidebar show={show} setShow={setShow} /> */}
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
        <div className="flex flex-col align-middle place-items-center gap-6 font-IBM-Sans px-8 py-10 mx-auto justify-center">
          <div className="w-[80vw] md:w-[50vw] bg-[#f3b641] shadow-xl rounded-2xl overflow-y-hidden my-10 mx-auto lg:mx-[5vw]">
            <form
              onSubmit={onSubmit}
              className="w-full h-full py-5 mt-5 bg-white px-10"
            >
              {/* <div className="grid grid-cols-2 gap-20 items-center justify-center px-40"> */}
              <div className="flex flex-col gap-8">
                {fields.map((field, index) => (
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
                ))}
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
                <hr></hr>
                <h4 className="capitalize">Canteen Contact Details</h4>
                <div className="flex flex-col gap-4">
                  <h4 className="capitalize">Name</h4>
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
                    value={
                      formdata.canteen_contact?.name
                        ? formdata.canteen_contact["name"]
                        : ""
                    }
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        canteen_contact: {
                          ...formdata.canteen_contact,
                          name: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="capitalize">Email</h4>
                  <input
                    type="email"
                    className="w-full p-4 outline-none"
                    style={{
                      color: "#818181",
                      background: "#f6f5f6",
                      border: "2px solid grey",
                      borderRadius: "8px",
                    }}
                    name="name"
                    placeholder="Text here"
                    value={
                      formdata.canteen_contact?.email
                        ? formdata.canteen_contact["email"]
                        : ""
                    }
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        canteen_contact: {
                          ...formdata.canteen_contact,
                          email: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="capitalize">Phone</h4>
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
                    value={
                      formdata.canteen_contact?.phone
                        ? formdata.canteen_contact["phone"]
                        : ""
                    }
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        canteen_contact: {
                          ...formdata.canteen_contact,
                          phone: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <h4 className="capitalize">Resources</h4>
                <CreatableSelect
                  className="w-full outline-none"
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  isMulti
                  components={animatedComponents}
                  value={formdata.food}
                  onChange={(e) => {
                    setFormData({
                      ...formdata,
                      resources: convertToArray(e),
                    });
                  }}
                />
                <hr></hr>
                <h4 className="capitalize">Canteen Menu Details</h4>

                <div className="flex flex-col gap-4">
                  <h4 className="capitalize">Breakfast</h4>
                  <CreatableSelect
                    className="w-full outline-none"
                    styles={customStyles}
                    closeMenuOnSelect={false}
                    isMulti
                    components={animatedComponents}
                    value={formdata.food}
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        canteen_menu: {
                          ...formdata.canteen_menu,
                          breakfast: e,
                        },
                      });
                    }}
                  />
                  <h4 className="capitalize">Lunch</h4>
                  <CreatableSelect
                    className="w-full outline-none"
                    styles={customStyles}
                    closeMenuOnSelect={false}
                    isMulti
                    components={animatedComponents}
                    value={formdata.food}
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        canteen_menu: {
                          ...formdata.canteen_menu,
                          lunch: e,
                        },
                      });
                    }}
                  />
                  <h4 className="capitalize">Dinner</h4>
                  <CreatableSelect
                    className="w-full outline-none"
                    styles={customStyles}
                    closeMenuOnSelect={false}
                    isMulti
                    components={animatedComponents}
                    value={formdata.food}
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        canteen_menu: {
                          ...formdata.canteen_menu,
                          dinner: e,
                        },
                      });
                    }}
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
