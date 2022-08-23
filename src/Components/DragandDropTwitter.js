/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
function DragAndDrop({ mediaids, setMediaIds }) {
    const [imageurl, setImageUrl] = useState();
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
        data.append("media", file);
        console.log(file);
        console.log(data);


        var config = {
            method: 'post',
            url: 'https://upload.twitter.com/1.1/media/upload.json',
            headers: {
                'Authorization': `OAuth oauth_consumer_key="FWMrpUyDPqytfKmKgALcOIwIO",oauth_token=${localStorage.getItem("twitter_oauth_token")},oauth_signature_method="HMAC-SHA1",oauth_timestamp="1661250680",oauth_nonce="9a2t9lJXRUC",oauth_version="1.0",oauth_verifier=${localStorage.getItem("twitter_oauth_verifier")},oauth_signature="CH3cpfE%2F6VBq%2Fz4yvIVS7SjyqMg%3D"`,
                'Cookie': 'guest_id=v1%3A166080890446027164; guest_id_ads=v1%3A166080890446027164; guest_id_marketing=v1%3A166080890446027164; personalization_id="v1_V1dSLbAwLmw/L+5ExL+NWA=="',
            },
            data: data
        };

        //   {
        //     "media_id": 1562037850928926721,
        //     "media_id_string": "1562037850928926721",
        //     "size": 80037,
        //     "expires_after_secs": 86400,
        //     "image": {
        //         "image_type": "image/jpeg",
        //         "w": 1003,
        //         "h": 370
        //     }
        // }

        axios(config)
            .then(function (response) {
                console.log(response.data)
                setMediaIds([...mediaids, response?.data?.media_id_string])
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    setImageUrl(e.target.result)
                };
                //   console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <section className="h-[20vh]">
            {!imageurl ?
                <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>Drag and drop your post here, or click to select file</p>
                </div>
                : <img src={imageurl} alt="tweet" className="w-[50vw]" />}
        </section>
    );
}
export default DragAndDrop;