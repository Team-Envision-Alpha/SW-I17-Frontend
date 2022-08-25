/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import dp from "../Assets/Images/ico.svg";
import logo from "../Assets/Images/logo.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import '../Assets/styles.css'
import axios from "axios";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  const [file, setfile] = useState()
  let image = dp

  const USER_QUERY = gql`
  query user($id: ID!) {
    getUser(id:$id){
      image
  }
}
`
  const userData = useQuery(USER_QUERY, {
    variables: { id: user?.id },
  }
  );

  if (!userData.loading) {
    image = userData?.data?.getUser.image
  }


  // const [image, setimage] = useState(user?.image ? user?.image : dp)
  const [url, seturl] = useState()
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
      // setimage(dp)
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
      id: user?.id, image: url
    },
  });

  const photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);
    reader.onloadend = async () => {
      setfile(file)
      // setimage(reader.result)
      const url = await axios
        .post("https://envisionalpha.aaruush.org/upload/fbpageupload", data)
        .then((res) => {
          console.log(res.data.data);
          seturl(res.data.data);
          return res.data.data
        });
      if (url) {
        login()
      }
    }
    reader.readAsDataURL(file);
  }

  return (


    <div className="flex justify-between items-center">
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
      <div className="flex mr-3 gap-2 ">
        <div>
          {/* <img src={dp} alt="dp" width={35} /> */}
          <label htmlFor="photo-upload" className="custom-file-upload fas">
            <div className="img-wrap img-upload" >
              <img for="photo-upload" src={image} alt="hello" className="h-[40px] w-[40px] rounded-full" />
            </div>
            <input id="photo-upload" type="file" onChange={photoUpload} hidden />
          </label>

          <input type="file" hidden />
        </div>
        <div className="font-IBM-Sans">
          <p className="text-sm capitalize">{user.name}</p>
          <p className="text-xs capitalize " style={{ color: "#818181" }}>
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




  );
};

export default Navbar;
