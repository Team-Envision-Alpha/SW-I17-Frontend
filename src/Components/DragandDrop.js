/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { gql, useQuery } from "@apollo/client";

function DragAndDrop({ url, seturl , hashtag,sethashtag }) {

    const [ hash, sethash ] = useState("");

    const EVENT_QUERY = gql`
    query Query($image: String!) {
        getHashtags(image: $image)
      }
      
  `;

    const { loading, err, data,refetch } = useQuery(EVENT_QUERY, {
        variables: { image: url ? url :"hello" }
    });
    if (!loading) {
        console.log(data?.getHashtags);
        sethashtag(data?.getHashtags);
        sethash(data.getHashtags);

    }
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
        useDropzone({
            accept: "image/*",
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
            .post("https://envisionalpha.aaruush.org/upload/fbpageupload", data)
            .then((res) => {
                console.log(res);
                seturl(res.data.data);
                refetch({image:res.data.data});
            });
    };

    return (
        <section className="h-[20vh]">
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Drag and drop your post here, or click to select file</p>
            </div>
            <aside>
                {url && <img src={url} alt="post" className="h-[20vh]" />}
            </aside>
        </section>
    );
}
export default DragAndDrop;