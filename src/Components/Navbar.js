/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import dp from "../Assets/Images/ico.svg";
import logo from "../Assets/Images/logo.svg";
import bellIcon from "../Assets/Images/bellIcon.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "../Assets/styles.css";
import axios from "axios";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotifcationModal from "./notifcationModal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  const [file, setfile] = useState();
  let image = user?.image;

  // const [ userdata,setUserdata]= useState();

  // useEffect(()=>{
  //   image=user.image
  // },[user])

  // const [image, setimage] = useState();

  // const USER_QUERY = gql`
  //   query user($id: ID!) {
  //     getUser(id:$id){
  //       image
  //   }
  // }
  // `
  // const userData = useQuery(USER_QUERY, {
  //   variables: { id: user?.id },
  // }
  // );

  // if (!userData.loading) {
  //   image = userData?.data?.getUser.image
  // }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [url, seturl] = useState();
  // const user = { name: "Rishit", role: "admin" };
  const PROFILE_MUTATION = gql`
    mutation updateProfileImage($id: ID!, $image: String!) {
      updateProfileImage(id: $id, image: $image)
    }
  `;
  const [login, { loading }] = useMutation(PROFILE_MUTATION, {
    onError: (err) => {
      // console.log(JSON.parse(err.graphQLErrors[0].message.split(": ")[1]).data);
      console.log(err);
      toast.error("Error: Uploading Profile Photo Failed", {
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
      toast.success("Success: Profile Picture Updated", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setUser(result.loginUser);
      // localStorage.setItem("aicteuser", JSON.stringify(result.loginUser));
      // navigate("/dashboard");
    },

    variables: {
      id: user?.id,
      image: url,
    },
  });

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);
    reader.onloadend = async () => {
      setfile(file);
      // setimage(reader.result)
      const url = await axios
        .post("https://envisionalpha.aaruush.org/upload/fbpageupload", data)
        .then((res) => {
          console.log(res.data.data);
          seturl(res.data.data);
          return res.data.data;
        });
      if (url) {
        login();
      }
    };
    reader.readAsDataURL(file);
  };
  const NOTIFY = gql`
    query notify($id: ID!) {
      getNotifications(user_id: $id) {
        id
        user_id
        message
        createdat
      }
    }
  `;
  console.log(user);
  const notify = useQuery(NOTIFY, {
    variables: { id: user.id },
  });
  if (!notify?.loading) {
    console.log(notify?.data);
  }
  // console.log(userData?.data?.getUser)

  return (
    <>
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

      {window.location.pathname === "/dashboard" ? (
        <div className="flex justify-between p-6 h-[12vh] items-center">
          <div>
            <a href="/dashboard">
              <img src={logo} alt="logo" width={300} h={60} />
            </a>
          </div>

          {user && (
            <div className="flex gap-8 ">
              <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="flex  flex-col gap-2">
                      <div>
                        <p className="font-bold text-xl">Notifications</p>
                      </div>
                      {notify?.data?.getNotifications.map((notify) => (
                        <div className="flex justify-between items-center ">
                          <div className=" font-IBM-Sans">
                            <p className="text-base text-[#F0783B] font-bold ">
                              {notify.message}
                              <span className="text-3xl relative bottom-1">
                                .
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-[#696969] ">
                              {new Date(notify.createdat).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>
                    </div>
                  </Box>
                </Modal>
              </div>
              <div className="flex gap-2">
                <button onClick={handleOpen} className=" h-full"></button>

                <div>
                  {/* <img src={dp} alt="dp" width={35} /> */}
                  <label
                    htmlFor="photo-upload"
                    className="custom-file-upload fas"
                  >
                    <div className="img-wrap img-upload">
                      <img
                        for="photo-upload"
                        src={user?.image ? user?.image : dp}
                        alt="hello"
                        className="h-[40px] w-[40px] rounded-full"
                      />
                    </div>
                    <input
                      id="photo-upload"
                      type="file"
                      onChange={photoUpload}
                      hidden
                    />
                  </label>

                  <input type="file" hidden />
                </div>
                <div className="font-IBM-Sans">
                  <p className="text-sm capitalize">{user.name}</p>
                  <p
                    className="text-xs capitalize "
                    style={{ color: "#818181" }}
                  >
                    {user.role}
                  </p>
                </div>
              </div>
              <a
                href="/"
                onClick={() => {
                  localStorage.removeItem("aicteuser");
                  navigate("/");
                }}
              >
                <Button variant="outlined" color="error" size="small">
                  Logout
                </Button>
              </a>
            </div>
          )}
        </div>
      ) : (
        <>
          {user && (
            <div className="float-right absolute top-5 right-5 flex flex-row gap-x-7">
              <div className="flex gap-2">
                <div>
                  <img src={dp} alt="dp" width={35} />
                </div>
                <div className="font-IBM-Sans">
                  <p className="text-sm capitalize">{user.name}</p>
                  <p
                    className="text-xs capitalize "
                    style={{ color: "#818181" }}
                  >
                    {user.role}
                  </p>
                </div>
              </div>
              <a
                href="/"
                onClick={() => {
                  localStorage.removeItem("aicteuser");
                  navigate("/");
                }}
              >
                <Button variant="outlined" color="error" size="small">
                  Logout
                </Button>
              </a>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
