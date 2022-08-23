/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../Assets/Images/Group.svg";
import Burger from "../Components/burger";
import Navbar from "../Components/NewNavbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fbCover from "../Assets/Images/fbCover.svg";
import logo from "../Assets/Images/aicte.png";
import { MdLocationOn } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { BsLink45Deg, BsCalendar3, BsBarChartLine, BsUpload } from "react-icons/bs";
import {
  AiOutlineFileGif,
  AiOutlinePicture,
  AiOutlineSmile,
  AiTwotoneHeart,
} from "react-icons/ai";
import DragandDropTwitter from "../Components/DragandDropTwitter";

import { gql, useMutation, useQuery } from "@apollo/client";

const TwitterMainPage = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [mediaids, setMediaIds] = useState([]);
  let userData
  let timeline
  let media

  const user_id = localStorage.getItem('twitter_user_id')
  // const username = localStorage.getItem('twitter_screen_name')
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




  const TWITTERUSERDETAILS_QUERY = gql`
    query twGetUserDetails($userid:String!) {
      twGetUserDetails(userid:$userid)
    }
  `;

  const { loading, err, data } = useQuery(TWITTERUSERDETAILS_QUERY, {
    variables: { userid: user_id }
  });
  if (!loading) {
    userData = JSON.parse(data?.twGetUserDetails)?.user?.data[0]
    timeline = JSON.parse(data?.twGetUserDetails)?.timeline?.data
    media = JSON.parse(data?.twGetUserDetails)?.timeline?.includes.media
  }
  else {
    console.log(err)
  }


  const getmediaurl = (id) => {
    var url
    for (let i = 0; i < media.length; i++) {
      if (media[i].media_key === id) {
        url = media[i].url
      }
    }
    return url
  }


  const TWITTERPOSTTWEET_MUTATION = gql`
 mutation twCreateTweet($text: String, $mediaids: [String] , $twitter_oauth_token: String! , $twitter_oauth_verifier: String!) {
  twCreateTweet(text: $text, mediaids: $mediaids , twitter_oauth_token: $twitter_oauth_token , twitter_oauth_verifier: $twitter_oauth_verifier)
 }`


  const [twPostTweet] = useMutation(TWITTERPOSTTWEET_MUTATION, {
    variables: {
      text: text,
      mediaids: mediaids,
      twitter_oauth_token: localStorage.getItem('twitter_oauth_token'),
      twitter_oauth_verifier: localStorage.getItem('twitter_oauth_verifier')
    }
  })

  const UploadTweet =()=>{
    
    if(text.length || mediaids.length){
      twPostTweet()
      setText("")
      setMediaIds([])
    }
  }




  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex gap-[24vw] h-[200vh]"
      >
        <div>
          <Navbar />
          <div className="md:hidden block absolute z-50">
            <Burger open={show} setOpen={setShow} />
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
        </div>
        {data ?
          <div className="flex flex-col gap-[6vh]">
            <div className="font-IBM-Sans flex flex-col gap-5 py-[2vh]">
              <p className="text-2xl font-extrabold tracking-wide">Twitter</p>
              <p className="text-[#0F56B3] text-base font-bold">
                First Item / Second Item / Third Item
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col ml-[10vw]">
                {/* Description */}
                <div className="flex flex-col font-IBM-Sans relative">
                  <div className="flex gap-4">

                    <div className="w-[10vw] h-[20vh] rounded-full bg-white  mx-4">
                      <img src={userData?.profile_image_url} alt="logo" className="w-[10vw] h-[20vh]" />
                    </div>
                    <div>


                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-xl">
                            {userData?.name}
                          </p>
                          <p className="font-light text-[#5B7083]">
                            &#64;<span>{userData?.username}</span>
                          </p>
                        </div>

                      </div>

                      <div className="flex flex-col justify-center gap-2">
                        <div>
                          <p className="text-lg">{userData?.description}</p>
                        </div>

                        <div className="flex gap-10 text-md text-[#5B7083] items-center">
                          <div className="flex items-center gap-2">
                            <MdLocationOn />
                            <p>{userData?.location}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <BsLink45Deg />
                            <a href={userData?.entities?.url?.urls[0]?.expanded_url} target="_blank" rel="noopener noreferrer">{userData?.entities?.url?.urls[0]?.display_url}</a>
                          </div>
                          <div className="flex items-center gap-2">
                            <BsCalendar3 />
                            <p>{new Date(userData?.created_at).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <p className="font-bold">
                            {userData?.public_metrics?.following_count} {" "}
                            <span className="font-light text-[#5B7083]">
                              Following
                            </span>
                          </p>
                          <p className="font-bold">
                            {userData?.public_metrics?.followers_count} {" "}
                            <span className="font-light text-[#5B7083]">
                              Followers
                            </span>
                          </p>
                          <p className="font-bold">
                            {userData?.public_metrics?.tweet_count} {" "}
                            <span className="font-light text-[#5B7083]">
                              Total Tweets
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* Tweets */}

                  <div className="flex flex-col gap-4 my-4">
                    <div className="flex gap-3 items-center mt-5">
                      <input
                        className="text-lg text-[#5B7083] p-2 outline-none w-full"
                        placeholder="What's happening? "
                        value={text}
                        onChange={(e)=>{setText(e.target.value)}}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-2xl text-[#1DA1F2]">
                       
                        <DragandDropTwitter mediaids={mediaids} setmediaids={setMediaIds}/>
                      
                        <AiOutlineFileGif />
                        <BsBarChartLine />
                        <AiOutlineSmile />
                        <TbCalendarTime />
                      </div>

                      <div>
                        <button className="w-[6vw] p-2 border-2 bg-[#1DA1F2] text-lg text-white rounded-3xl font-bold" onClick={()=>{UploadTweet()}}>
                          Tweet
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col ">
                      {timeline?.map((tweet) => {

                        return (


                          <div className="mb-4">
                            <div className="flex gap-4 items-center font-IBM-Sans">
                              <div>
                                <div className="w-[4vw] h-[8vh] rounded-full bg-white  mx-4">
                                  <img src={userData?.profile_image_url} alt="logo" className="w-[4vw] h-[8vh]" />
                                </div>
                                <div className="rotate-90 relative top-[30vh] right-[24vh] w-[60vh] "></div>
                              </div>

                              <div className=" relative right-[47vh]">
                                <div>
                                  <p className="text-md text-[#5B7083] ">
                                    <span className="font-bold text-black">{userData?.name}</span>{" "}
                                    &#64;{userData?.username}{" "}
                                    <span className="relative bottom-1">.</span> {converttime(tweet.created_at)}
                                  </p>
                                  <p className="text-md">{tweet.text}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-8">
                              {tweet.attachments &&
                                <div className="pl-[15vh]">
                                  <img src={getmediaurl(tweet.attachments.media_keys[0])} alt="cover" className="object-contain w-[50vw]" />
                                </div>
                              }

                              <div>
                                <div className="w-[50vw] flex gap-28 pl-[16vh] items-center">
                                  <div className="flex gap-4 text-[#5B7083]">
                                    <button>
                                      <FaRegComment className="text-lg" />
                                    </button>
                                    <p className="text-md">{tweet.public_metrics.reply_count}</p>
                                  </div>
                                  <div className="flex gap-4 text-[#5B7083]">
                                    <button>
                                      <FaRetweet className="text-2xl" />
                                    </button>
                                    <p className="text-md">{tweet.public_metrics.retweet_count}</p>
                                  </div>
                                  <div className="flex gap-4 ">
                                    <button>
                                      <AiTwotoneHeart className="text-[#F4245E] text-lg" />
                                    </button>
                                    <p className="text-md text-[#F4245E] ">{tweet.public_metrics.like_count}</p>
                                  </div>
                                  <div className="flex gap-4 text-[#5B7083]">
                                    <button>
                                      <BsUpload className="text-lg" />
                                    </button>
                                    <p className="text-md">{tweet.public_metrics.quote_count}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="pl-28">
                                <a href="/" className="text-md text-[#1DA1F2] ">
                                  Show this thread
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      )}

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          : <p>Loading</p>}

      </div>
    </>
  );
};

export default TwitterMainPage;
