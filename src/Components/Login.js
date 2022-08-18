
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";

import logo from "../Assets/Images/logo.svg";
import loginBg from "../Assets/Images/Group.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // user = localStorage.getItem("aicteuser")
  // const user = { name: "Rishit", role: "admin" };
  const [user, setUser] = useState();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const LOGIN_MUTATION = gql`
    mutation loginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        name
        email
        role
        token
        id
      }
    }
  `;
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onError: (err) => {
      // console.log(JSON.parse(err.graphQLErrors[0].message.split(": ")[1]).data);
      console.log(err);
      toast.error("Error: Invalid Credentials", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onCompleted: (result) => {
      console.log(result);
      setUser(result.loginUser);
      localStorage.setItem("aicteuser", JSON.stringify(result.loginUser));
      navigate("/dashboard");
    },

    variables: userData,
  });

  // useEffect(() => {
  //   if (user) {
  //     navigate("/dashboard");
  //   }
  // }, []);
  const onSubmit = (e) => {
    console.log("logging in");
    e.preventDefault();
    toast.info("Logging in!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    login();

    console.log(loading);
  };
  return (
    <>
      <div
        className="flex flex-col gap-[5vh] h-[100vh] justify-center items-center -mt-12"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
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
        <div>
          <img src={logo} alt="logo" width={400} height={100} />
        </div>
        <p className="font-IBM-Sans flex flex-col gap-5 justify-center items-center text-[5vh] text-center mt-5 font-bold">
          {" "}
          AICTE Event Management Portal
        </p>
        <div className="font-IBM-Sans flex flex-col gap-6 justify-center items-center ">
          <div>
            <h2
              className="text-[5vh] text-center "
              style={{ color: "#04559C", fontWeight: "700" }}
            >
              LOGIN
            </h2>
          </div>
          <div>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-10 justify-center items-center"
            >
              <input
                type="email"
                name="email"
                id="mail"
                placeholder="Email address"
                autoComplete="off"
                className="outline-none w-[24vw] min-w-full px-4 py-2 text-[3vh] font-light "
                style={{
                  color: "#818181",
                  background: "#E0E0E0",
                  borderRadius: "11.8px",
                }}
                value={userData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Password"
                autoComplete="off"
                className="outline-none w-[32vw] min-w-max px-4 py-2 text-[3vh] font-light "
                style={{
                  color: "#818181",
                  background: "#E0E0E0",
                  borderRadius: "11.8px",
                }}
                value={userData.password}
                onChange={handleChange}
              />
              <div
                className="w-24 min-w-max text-[3vh] text-white rounded-lg text-center"
                style={{ background: "#1F8B24" }}
              >
                <button
                  className="font-extrabold border-none outline-none p-2 px-4"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
