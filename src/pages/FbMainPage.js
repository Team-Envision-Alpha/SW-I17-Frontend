/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import bg from "../Assets/Images/Group.svg";
import fbCover from "../Assets/Images/fbCover.svg";
import tickIcon from "../Assets/Images/tickIcon.svg";
import msgIcon from "../Assets/Images/msgIcon.svg";
import redirect from "../Assets/Images/redirect.svg";
import fbLike from "../Assets/Images/fbLike.svg";
// import fbHeart from "../Assets/Images/fbHeart.svg";
// import logo from "../Assets/Images/aicte.png";
// import Burger from "../Components/burger";
// import Navbar from "../Components/NewNavbar";
// import Sidebar from "../Components/Sidebar";
import uploadButtonIcon from "../Assets/Images/uploadButton.svg";
import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill,  BsUpload } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { RiImageAddFill, RiSendPlaneFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import DragandDrop from "../Components/DragandDrop";

import Loading from "../Components/Loading";


const FbMainPage = () => {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [url, seturl] = useState("");
  const [caption, setcaption] = useState("");
  const [hashtag,sethashtag]=useState("");
  const [pageloading, setPageloading] = useState(true);
  let postuploaded
  console.log(url)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const converttime = (time) => {
    const date1 = new Date(time);
    const date2 = new Date();
    function getDifferenceInDays(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    }

    function getDifferenceInHours(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return Math.ceil(diffInMs / (1000 * 60 * 60));
    }

    function getDifferenceInMinutes(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return Math.ceil(diffInMs / (1000 * 60));
    }

    function getDifferenceInSeconds(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return Math.ceil(diffInMs / 1000);
    }

    if (getDifferenceInSeconds(date1, date2) < 60) {
      return getDifferenceInSeconds(date1, date2) + " seconds ago";
    } else if (getDifferenceInSeconds(date1, date2) > 60 && getDifferenceInMinutes(date1, date2) < 60) {
      return getDifferenceInMinutes(date1, date2) + " minutes ago";
    } else if (getDifferenceInMinutes(date1, date2) > 60 && getDifferenceInHours(date1, date2) < 24) {
      return getDifferenceInHours(date1, date2) + " hours ago";
    } else {
      return getDifferenceInDays(date1, date2) + " days ago";
    }
  }



  const { id } = useParams();
  const [pageData, setPageData] = useState()
  const pageaccesstoken = localStorage.getItem(`${id}`);
  console.log(pageData)


  const UPLOAD_POST_MUTATION = gql`
    mutation fbUploadPost($caption: String, $url: String , $pageaccesstoken: String! , $pageid: String!) {
      fbUploadPost(caption: $caption, url: $url, pageaccesstoken: $pageaccesstoken, pageid: $pageid)
    }`

  const PAGEDATA_MUTATION = gql`
  mutation
    fbPageData(
  $id: String! $pageaccesstoken: String!
    ){
      fbPageData(
        id: $id pageaccesstoken: $pageaccesstoken)
    }
`;

  const [register, { loading }] = useMutation(PAGEDATA_MUTATION, {
    onError: (err) => {
      console.log("err", err);
      toast.error("Error: Cannot get Page Data", {
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
      setPageData(JSON.parse(data.fbPageData));
      setPageloading(false)
    },
    variables: {
      id, pageaccesstoken
    }

  });

  const [postupload, { uploadloading }] = useMutation(UPLOAD_POST_MUTATION, {
    onError: (err) => {
      console.log("err", err);
      toast.error("Error: Cannot Upload Post", {
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
      console.log(data)
      postuploaded = data

      toast.success("Success: Post Uploaded Successfull", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    },
    variables: {
      pageid: id, pageaccesstoken, url, caption
    }

  });




  useEffect(() => {
    register();
  }, [pageaccesstoken, postuploaded])

  const uploadPost = (e) => {
    e.preventDefault();
    postupload()
  }

  if(hashtag){
    setcaption(hashtag)
  }

  return (
    <>
      {pageloading ? <Loading /> :
        <div
          // style={{ backgroundImage: `url(${bg})` }}
          className="flex pl-3 h-[220vh]"
        >
          <div>
            {/* <Navbar />
          <div className="md:hidden block absolute z-50">
            <Burger open={show} setOpen={setShow} />
          </div>
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
          </div>

          <div className="flex flex-col gap-[6vh] w-[70vw]">
           
            <div className="flex flex-col gap-8">
              <div className="flex flex-col ">
                <div className="w-full">
                  <img src={pageData?.cover.source} alt="cover" className="w-full h-[50vh] object-cover" />
                </div>
                <div className="flex justify-between items-center p-2">
                  <div className="flex gap-6 items-center">
                  <div className="w-[10vw] h-[20vh] rounded-full  relative bottom-[4vh]">
                    <img src={pageData?.picture.data.url} alt="logo" className="w-[10vw] h-[20vh] rounded-full " />
                  </div>
                    <div className="font-IBM-Sans relative bottom-[2vh]">
                      <div className="flex gap-2">
                        <p className="font-bold text-xl tracking-wide ">
                          {pageData?.name}
                        </p>
                        {
                          (pageData?.verification_status !== "not_verified") &&
                          <img src={tickIcon} alt="tickIcon" />
                        }
                      </div>

                      <div className="flex gap-2 font-light text-[#65676B] font-IBM-Sans">
                        <p>
                          &#64;<span>{pageData?.username}</span>
                        </p>

                        <p className="text-[#65676B] text-3xl relative bottom-[2vh]">
                          .
                        </p>
                        <p className="text-[#65676B] text-3xl relative bottom-[2vh]">
                          .
                        </p>
                        <p>{pageData?.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 relative bottom-[2vh]">
                  <button className="font-IBM-Sans flex justify-center items-center gap-3 w-[20vw] bg-[#1877F2] text-white font-bold px-12 py-3 rounded-md" onClick={() => { setModalIsOpen(true) }}>
                   <img src={uploadButtonIcon} alt="uploadButton" width={20} />
                    <p className="tracking-wide">Upload Post</p>
                  </button>
                  <a href={pageData?.website} target="_blank" rel="noopener noreferrer" >
                    <div className="flex gap-2 justify-center  font-IBM-Sans hover:text-[#1877F2] hover:underline">
                      <img src={redirect} alt="redirect" />
                      <p>{pageData?.website}</p>
                    </div>
                  </a>
                </div>
                </div>
                <div className="border-b-2 border-b-[#CED0D4] relative bottom-[3vh]"></div>
              </div>


              {/* SEARCH FEATURE WILL BE IMPLEMENTED */}

              <div className="grid grid-cols-2 gap-6 font-IBM-Sans p-2">
                <div className="w-full h-fit flex flex-col gap-4 bg-[white] p-3 rounded-xl shadow-sm ">
                  <div className="flex justify-between font ">
                    <p className="text-xl font-bold">About</p>
                  </div>
                  <div className="w-full h-[25vh]">
                    {/* MAP WILL COME HERE */}
                    <img src={pageData?.cover.source} alt="fbCover" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col gap-6 font-IBM-Sans justify-center">
                    <div className="flex gap-66 items-center">
                      <FaInfoCircle className="text-[#8C939D] text-6xl" />
                      <p>{pageData?.about}
                      </p>
                    </div>
                    <div className="flex gap-66 items-center">
                      <AiFillLike className="text-[#8C939D] text-3xl" />
                      <p>
                        {pageData?.engagement.count} people like this
                      </p>
                    </div>

                    <div className="flex gap-66 items-center">
                      <MdLocationOn className="text-[#8C939D] text-3xl" />
                      <p>
                        {pageData?.followers_count} people follow this
                      </p>
                    </div>
                    <div className="flex gap-66 items-center">
                      <TbWorld className="text-[#8C939D] text-3xl" />
                      <a href={pageData?.website} target="_blank" rel="noopener noreferrer">
                        {pageData?.website}
                      </a>
                    </div>
                    <div className="flex gap-66 items-center">
                      <BsFillTelephoneFill className="text-[#8C939D] text-2xl" />
                      <p>
                        {pageData?.phone}
                      </p>
                    </div>
                    <div className="flex gap-66 items-center">
                      <GrMail className="text-[#8C939D] text-2xl" />
                      <p>
                        {pageData?.emails[0]}
                      </p>
                    </div>
                    <div className="flex gap-66 items-center">
                      <BsMessenger className="text-[#8C939D] text-2xl" />
                      <a href="/fb_messenger">
                        Send messages
                      </a>
                    </div>
                    {pageData?.is_always_open &&
                      <div className="flex gap-66 items-center">
                        <BsFillClockFill className="text-[#8d9d8c] text-2xl" />
                        <p className="text-[green] text-bold">
                          Always Open
                        </p>
                      </div>
                    }
                    <div className="flex gap-6 items-center mb-2 ">
                    <a href={pageData?.link} target="_blank" rel="noopener noreferrer" className="underline text-[#1877F2]">
                      Visit this page on Facebook
                    </a>
                  </div>
                  </div>
                </div>




                <div className="w-full h-[150vh] overflow-auto">

                  <div className="w-full h-fit bg-[#FFFFFF] rounded-xl shadow-sm flex flex-col gap-2 mb-5 p-3">
                    <div className="flex p-4 items-center gap-4">
                      <div className="w-[3vw] h-[6vh]">
                        <img src={pageData?.picture?.data.url} alt="logo" className="rounded-full" />
                      </div>
                      <h1 className="text-lg font-bold">Create a Post</h1>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-4 pt-20"><RiImageAddFill className="text-7xl text-[#818181] " />
                    <DragandDrop url={url} seturl={seturl} hashtag={hashtag} sethashtag={sethashtag}/>
                  </div>
                    <div className="flex p-4 items-center gap-2">
                      <div>
                        <input
                          type="text"
                          name="Post Caption"
                          className="w-[20vw] px-4 py-2 outline-none"
                          style={{
                            color: "#818181",
                            background: "#f6f5f6",

                            borderRadius: "16px",
                          }}
                          placeholder="Post Caption"
                          onChange={(e) => { setcaption(e.target.value) }}
                        />
                      </div>
                      <RiSendPlaneFill onClick={(e) => { uploadPost(e) }} className="text-[#1877F2] text-3xl"/>
                    </div>
                  </div>


                  {pageData?.feed?.data?.filter((data) => {
                    if (data.status_type !== "wall_post") {
                      return data
                    } else {
                      return ""
                    }
                  }).map((data, idx) => (
                    <div className="w-full h-fit bg-[#FFFFFF] rounded-xl shadow-sm flex flex-col gap-2 mb-5" key={idx}>
                      {/* logo */}
                      <div className="flex p-4 gap-4 items-start  justify-between">
                        <div className="flex items-center">
                          <div className="w-[4vw] h-[8vh] font-IBM-Sans mr-2">
                            <img src={pageData?.picture.data.url} alt="logo" className="rounded-full" />

                          </div>
                          <div>
                            <p className="font-bold">{data.from.name}</p>
                            <div className="flex items- gap-2">
                              <p className="text-[#65676B]">{converttime(data.created_time)}</p>
                              <p className="text-[#65676B] text-3xl relative bottom-[2vh]">
                                .
                              </p>
                              <BiWorld className="text-[#65676B] text-xl" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-top">
                          <a href={data.permalink_url} target="_blank" rel="noopener noreferrer">
                            <img src={redirect} alt="redirect" />
                          </a>
                        </div>
                      </div>
                      {/* post */}
                      <div className="flex flex-col gap-6">
                        <div className="font-IBM-Sans text-base px-4">
                          <p>
                            {data.message ? data.message : ""}
                          </p>
                        </div>


                        {/* <div className="w-full h-[35vh]"> */}


                        {data.attachments ?
                          <div className="w-full h-full">
                            {data.attachments?.data.length > 1 ?
                              <Carousel>
                                {data.attachments.data.map((attachment, idx) => (
                                  <div key={idx}>
                                    {attachment.media_type === "video" ?
                                      <ReactPlayer url={attachment.media.source} controls={true} width="100%" height="100%" loop={true} playsinline pip />
                                      :
                                      <img src={attachment.media?.image.src} alt="attachment" className="w-full h-full" />
                                    }
                                  </div>
                                ))}
                              </Carousel>

                              :
                              <div>
                                {data.attachments?.data.map((attachment, idx) => (
                                  <div key={idx} className="h-full w-full">
                                    {attachment.media_type === "video" ?

                                      <ReactPlayer url={attachment.media.source} controls={true} width="100%" height="100%" loop={true} playsinline pip />

                                      :
                                      <img src={attachment?.media?.image.src} alt="attachment" className="w-full h-full" />
                                    }
                                  </div>
                                ))}
                              </div>

                            }

                          </div>
                          : ""}


                        <div className="flex justify-between px-6 items-center">

                          <div className="flex gap-6">
                            <div className="flex">
                              <img src={fbLike} alt="fbLike" />
                            </div>
                            <p className="text-[#65676B]">{data.likes ? data.likes.data.length : 0}</p>
                          </div>
                          <div className="flex gap-6 text-[#65676B] font-IBM-Sans">
                            <p>{data.comments ? data.comments.data.length : 0} comments</p>
                            <p>{data.shares ? data.shares.count : 0} shares</p>
                          </div>
                        </div>


                      </div>




                      <div className="font-IBM-Sans  p-6  flex flex-col gap-4">
                        <div className="border-b-2 border-b-[#CED0D4] mx-3"></div>
                        {data.comments &&
                          <div>
                            <p className="text-[#65676B] font-bold text-base mb-2">
                              View More Comments
                            </p>
                            <div className="w-[16vw]  bg-[#F0F2F5] rounded-2xl">
                              <div className="p-4">
                                <p className="text-base ">Joana Almeida</p>
                                <p className="text-sm font-light">qwertynvhgcgf</p>
                              </div>
                            </div>
                            <div className="flex justify-around text-[#65676B] w-[16vw] text-sm">
                              <p className="font-bold">Like</p>
                              <p className="font-bold">Respond</p>
                              <p className="fontyt-light">10h</p>
                            </div>
                          </div>

                        }


                        <div className="flex p-4 items-center gap-2">
                          <div className="w-[3vw] h-[6vh]">
                            <img src={pageData.picture.data.url} alt="logo" className="rounded-full" />
                          </div>
                          <div>
                            <input
                              type="email"
                              name="contact"
                              className="w-[24vw] px-4 py-2 outline-none"
                              style={{
                                color: "#818181",
                                background: "#f6f5f6",

                                borderRadius: "16px",
                              }}
                              placeholder="Comment"
                            />
                          </div>
                        </div>
                      </div>




                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => { setModalIsOpen(false) }}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {/* <button onClick={() => { setModalIsOpen(false) }}>close</button> */}
          </Modal>
        </div>
      }

    </>
  );
};

export default FbMainPage;