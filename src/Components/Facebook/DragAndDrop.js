/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

function DragAndDrop({ url, seturl }) {
  const dbuseruid = localStorage.getItem("dbuseruid");

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: "image/jpeg, image/png",
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles[0]);

        uploadimage(acceptedFiles[0]);
      },
    });

  const uploadimage = async (file) => {
    const data = new FormData();
    data.append("image", file);
    console.log(file);
    console.log(data);
    axios
      .post("https://sociophin.herokuapp.com/image-upload", data)
      .then((res) => {
        console.log(res);
        seturl(res.data.imageUrl);
      });
  };

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some file here, or click to select file</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>{url && <img src={url} className="" alt="post" />}</aside>
    </section>
  );
}
export default DragAndDrop;
