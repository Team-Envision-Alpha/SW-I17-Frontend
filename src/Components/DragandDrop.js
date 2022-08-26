/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { gql, useQuery } from "@apollo/client";

function DragAndDrop({ url, seturl, hashtag, sethashtag }) {

    // const [ hash, sethash ] = useState("");
    let hash = ""

    const EVENT_QUERY = gql`
    query Query($image: String!) {
        getHashtags(image: $image)
      }
      
  `;

    const { loading, err, data, refetch } = useQuery(EVENT_QUERY, {
        variables: { image: "hello" }
        //  variables: { image: "https://aicte-storage.s3.ap-south-1.amazonaws.com/fbpageupload/fbCover-1661511143762.webp" }
    });
    if (!loading) {
        console.log(data)
        // console.log(data?.getHashtags);
        // sethashtag(data?.getHashtags);
        hash = data?.getHashtags;
        // sethash(data?.getHashtags);

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
                seturl(res.data.data);
                refetch({ image: res.data.data });
            });
    };

    return (
        <section className="h-[40vh]">
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                {!url && <p>Drag and drop your post here, or click to select file</p>}
            </div>
            <aside>
                {url && <img src={url} alt="post" className="h-[20vh]" />}
            </aside>
            {hash && <div className="mt-8 space-y-2">
                <span>Hashtag Generated Automatically</span>
                <p className="">{hash}</p>
            </div>}
        </section>
    );
}
export default DragAndDrop;