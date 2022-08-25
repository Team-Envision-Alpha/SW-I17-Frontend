/* eslint-disable no-unused-vars */
import React from "react";

import ChatSecOne from "./ChatSecOne";
import ChatSecTwo from "./ChatSecTwo";
import addChat from "../Assets/Images/addChat.svg";
import crossChat from "../Assets/Images/crossIcon.svg";
import searchIcon from "../Assets/Images/searchIcon.svg";
import logo from "../Assets/Images/aicte.png";
import { FaCircle } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { BsEmojiSmile, BsCamera } from "react-icons/bs";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const Chat = ({ title }) => {
  const user = JSON.parse(localStorage.getItem("aicteuser"));
  const converttime = (time) => {
    const date1 = new Date(time);
    const date2 = new Date();
    // console.log(getDifferenceInHours(date1, date2));
    // console.log(getDifferenceInMinutes(date1, date2));
    // console.log(getDifferenceInSeconds(date1, date2));

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
    } else if (
      getDifferenceInSeconds(date1, date2) > 60 &&
      getDifferenceInMinutes(date1, date2) < 60
    ) {
      return getDifferenceInMinutes(date1, date2) + " minutes ago";
    } else if (
      getDifferenceInMinutes(date1, date2) > 60 &&
      getDifferenceInHours(date1, date2) < 24
    ) {
      return getDifferenceInHours(date1, date2) + " hours ago";
    } else {
      return getDifferenceInDays(date1, date2) + " days ago";
    }
  };
  const [openchat, setOpenchat] = React.useState({
    open: false,
    seconduser: "",
    name: "",
  });
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState(false);
  const [commonchat, setCommonChat] = useState(false);

  const CHATS_QUERY = gql`
    query Chats($seconduser: ID!) {
      getInbox {
        _id
        user1
        user2
        user1_name
        user2_name
        lastmessage
        createdAt
        updatedAt
      }
      getMessages(seconduser: $seconduser) {
        _id
        from_user
        to_user
        by_user
        message
        createdAt
      }
      getUsers {
        id
        name
      }
      getCommonMessages {
        user_name
        message
        _id
        createdAt
        user_id
      }
    }
  `;

  const openChatBox = (seconduser, name) => {
    setOpenchat({
      open: true,
      seconduser,
      name,
    });
    refetch({ seconduser });
  };

  const SEND_MSG_MUTATION = gql`
    mutation sendMessage($to: ID!, $to_name: String!, $message: String!) {
      sendMessage(to: $to, to_name: $to_name, message: $message)
    }
  `;
  const [sendMsg, msgdata] = useMutation(SEND_MSG_MUTATION, {
    onError: (err) => {
      console.log(err);
    },
    onCompleted: (data) => {
      console.log(data);
      refetch();
    },
    variables: { to: openchat.seconduser, to_name: openchat.name, message },
  });
  const sendMessage = (e) => {
    e.preventDefault();
    sendMsg();
    setMessage("");
    refetch({ seconduser: openchat.seconduser });
  };
  const SEND_COMMON_MUTATION = gql`
    mutation sendCommonMessage($message: String!) {
      sendCommonMessage(message: $message)
    }
  `;
  const [sendCommon, commonmsgdata] = useMutation(SEND_COMMON_MUTATION, {
    onError: (err) => {
      console.log(err);
    },
    onCompleted: (data) => {
      console.log(data);
      refetch();
    },
    variables: { message },
  });
  const sendCommonMessage = (e) => {
    e.preventDefault();
    sendCommon();
    setMessage("");
    refetch();
  };

  const { loading, err, data, refetch } = useQuery(CHATS_QUERY, {
    variables: { seconduser: user.id },
  });
  if (loading) {
    return <h3>Loading...</h3>;
  }
  console.log(data);

  let length = 10;

  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-[70vw]">
        {/* chat sec-1 */}
        <div className="col-span-1 bg-white shadow-md rounded-2xl  h-fit">
          <div className="flex flex-col gap-4 font-IBM-Sans p-4">
            {/* header */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-xl tracking-wide">
                {newMessage ? "Start new conversation" : "AICTE users Chat"}
              </p>

              {newMessage ? (
                <button
                  onClick={() => {
                    setNewMessage(false);
                  }}
                >
                  <img
                    src={crossChat}
                    alt="addChat"
                    className="text-base"
                    width={25}
                  />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setNewMessage(true);
                  }}
                >
                  <img
                    src={addChat}
                    alt="addChat"
                    className="text-base"
                    width={25}
                  />
                </button>
              )}
            </div>
            {/* search bar */}
            <div className="flex items-center justify-between max-w-full rounded-2xl bg-[#E9E9E9] py-2 px-4">
              <input
                type="text"
                className="text-sm w-full outline-none rounded-2xl bg-[#E9E9E9]"
                placeholder="Persons, Groups, Chats "
              />

              <img src={searchIcon} alt="searchIcon" className="pl-1" />
            </div>
            {newMessage ? (
              <div>
                <ul className="flex flex-col gap-2">
                  {data?.getUsers?.map((user) => {
                    console.log(user);
                    return (
                      <li>
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => {
                            setCommonChat(false);
                            setNewMessage(false);
                            openChatBox(user.id, user.name);
                          }}
                        >
                          <div className="flex items-center gap-6">
                            <div>
                              <img
                                src={logo}
                                alt="logo"
                                className="w-[3vw] h-[6vh] rounded-full"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-lg">{user.name}</p>
                              <p className="text-base text-[#65676B]">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div>
                <ul className="flex flex-col gap-2">
                  <li className="cursor-pointer">
                    <div
                      className="flex items-center gap-6"
                      onClick={() => {
                        setCommonChat(true);
                      }}
                    >
                      <div>
                        <img
                          src={logo}
                          alt="logo"
                          className="w-[3vw] h-[6vh] rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Common Chat</p>
                      </div>
                    </div>
                    <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>
                  </li>
                  {data?.getInbox.map((inbox) => (
                    <li key={inbox._id} className="cursor-pointer">
                      <div
                        className="flex justify-between items-center"
                        onClick={() => {
                          openChatBox(
                            user.id === inbox.user1 ? inbox.user2 : inbox.user1,
                            user.id === inbox.user1
                              ? inbox.user2_name
                              : inbox.user1_name
                          );
                          setCommonChat(false);
                        }}
                      >
                        <div className="flex items-center gap-6 ">
                          <div>
                            <img
                              src={logo}
                              alt="logo"
                              className="w-[3vw] h-[6vh] rounded-full"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-lg">
                              {user.id === inbox.user1
                                ? inbox.user2_name
                                : inbox.user1_name}
                            </p>
                            <div className="w-[15vw] flex justify-between items-center ">
                              <p className="text-base text-[#65676B]">
                                {inbox.lastmessage.length > length
                                  ? inbox.lastmessage.slice(0, 11) + "..."
                                  : inbox.lastmessage}
                              </p>
                              <p className="text-sm font-extralight text-[#65676B]">
                                {converttime(inbox.updatedAt)}
                              </p>

                              {/* <div className="rounded-full bg-red-600 w-[2vw] h-[4vh] text-white flex justify-center items-center">
                            <p>4</p>
                          </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {commonchat ? (
          <div className="col-span-2 bg-white shadow-md rounded-2xl font-IBM-Sans h-fit">
            <div className=" flex flex-col gap-4 p-4">
              <div className="flex items-center gap-6">
                <div>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[3vw] h-[6vh] rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Common Chat Room</p>
                </div>
              </div>
              <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>

              {/* main_chat */}
              <div className="p-4 font-IBM-Sans text-base h-[50vh] overflow-y-scroll">
                <ul className="flex flex-col gap-6">
                  {data?.getCommonMessages.map((chat) => (
                    <>
                      {user.id === chat.user_id ? (
                        <li className="flex flex-col gap-2 justify-center items-end ">
                          <div className="text-white p-4 rounded-3xl bg-[#1DA1F2] max-w-[80%] text-base ">
                            <p className="font-bold">{chat.user_name}</p>
                            <p>{chat.message}</p>
                          </div>

                          <div className="flex items-center px-2 gap-2 text-[#1DA1F2]">
                            <span className="text-black">
                              {" "}
                              {converttime(chat.createdAt)}
                            </span>
                            <FaCircle />
                          </div>
                        </li>
                      ) : (
                        <li
                          key={chat._id}
                          className="flex flex-col gap-2 justify-center items-start "
                        >
                          <div className=" p-4 rounded-3xl bg-[#E7E7E7] max-w-[80%] text-base flex flex-col gap-2 ">
                            <p className="font-bold">{chat.user_name}</p>
                            <p>{chat.message}</p>
                          </div>
                          <div className="flex items-center px-2 gap-2 text-[#E7E7E7] ">
                            <FaCircle />
                            <span className="text-black ">
                              {converttime(chat.createdAt)}
                            </span>
                          </div>
                        </li>
                      )}
                    </>
                  ))}

                  {/* my msg */}
                  {/* <li className="flex flex-col gap-2 justify-center items-end ">
                  <div className="text-white p-4 rounded-3xl bg-[#1DA1F2] max-w-[80%] text-base ">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis, eaque.
                    </p>
                  </div>

                  <div className="flex items-center px-2 gap-2 text-[#1DA1F2]">
                    <span className="text-black">10:10 AM, Today</span>
                    <FaCircle />
                  </div>
                </li> */}

                  {/* other msg */}
                  {/* <li className="flex flex-col gap-2 justify-center items-start ">
                  <div className=" p-4 rounded-3xl bg-[#E7E7E7] max-w-[80%] text-base ">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis, eaque.
                    </p>
                  </div>

                  <div className="flex items-center px-2 gap-2 text-[#E7E7E7]">
                    <FaCircle />
                    <span className="text-black">10:10 AM, Today</span>
                  </div>
                </li> */}
                </ul>
              </div>

              {/* msg input */}
              <div>
                <form className="" onSubmit={sendCommonMessage}>
                  <div className="w-[100%] p-4 flex justify-between items-center bg-[#EFF6FCDE] rounded-3xl">
                    <div className="flex gap-8 items-center ">
                      <button>
                        <GrAttachment className="text-[#333333] text-xl" />
                      </button>
                      <textarea
                        name="msg"
                        id="msg"
                        cols="48"
                        rows="1"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="outline-none font-IBM-Sans text-base bg-transparent  "
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                    <div className="flex items-center gap-4">
                      <button type="submit">
                        <FiSend className="text-[#333333] text-xl" />
                      </button>
                      <button>
                        <BsEmojiSmile className="text-[#333333] text-xl" />
                      </button>
                      <button>
                        <BsCamera className="text-[#333333] text-2xl" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <>
            {openchat.open && (
              <>
                <div className="col-span-2 bg-white shadow-md rounded-2xl font-IBM-Sans h-fit">
                  <div className=" flex flex-col gap-4 p-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <img
                          src={logo}
                          alt="logo"
                          className="w-[3vw] h-[6vh] rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{openchat.name}</p>
                      </div>
                    </div>
                    <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>

                    {/* main_chat */}
                    <div className="p-4 font-IBM-Sans text-base h-[50vh] overflow-y-scroll">
                      <ul className="flex flex-col gap-6">
                        {data?.getMessages.map((chat) => (
                          <>
                            {user.id === chat.by_user ? (
                              <li
                                key={chat._id}
                                className="flex flex-col gap-2 justify-center items-end "
                              >
                                <div className="text-white p-4 rounded-3xl bg-[#1DA1F2] max-w-[80%] text-base ">
                                  <p>{chat.message}</p>
                                </div>

                                <div className="flex items-center px-2 gap-2 text-[#1DA1F2]">
                                  <span className="text-black">
                                    {converttime(chat.createdAt)}
                                  </span>
                                  <FaCircle />
                                </div>
                              </li>
                            ) : (
                              <li
                                key={chat._id}
                                className="flex flex-col gap-2 justify-center items-start "
                              >
                                <div className=" p-4 rounded-3xl bg-[#E7E7E7] max-w-[80%] text-base ">
                                  <p>{chat.message}</p>
                                </div>
                                <div className="flex items-center px-2 gap-2 text-[#E7E7E7]">
                                  <FaCircle />
                                  <span className="text-black">
                                    {converttime(chat.createdAt)}
                                  </span>
                                </div>
                              </li>
                            )}
                          </>
                        ))}

                        {/* my msg */}
                        {/* <li className="flex flex-col gap-2 justify-center items-end ">
                  <div className="text-white p-4 rounded-3xl bg-[#1DA1F2] max-w-[80%] text-base ">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis, eaque.
                    </p>
                  </div>

                  <div className="flex items-center px-2 gap-2 text-[#1DA1F2]">
                    <span className="text-black">10:10 AM, Today</span>
                    <FaCircle />
                  </div>
                </li> */}

                        {/* other msg */}
                        {/* <li className="flex flex-col gap-2 justify-center items-start ">
                  <div className=" p-4 rounded-3xl bg-[#E7E7E7] max-w-[80%] text-base ">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis, eaque.
                    </p>
                  </div>

                  <div className="flex items-center px-2 gap-2 text-[#E7E7E7]">
                    <FaCircle />
                    <span className="text-black">10:10 AM, Today</span>
                  </div>
                </li> */}
                      </ul>
                    </div>

                    {/* msg input */}
                    <div>
                      <form className="" onSubmit={sendMessage}>
                        <div className="w-[100%] p-4 flex justify-between items-center bg-[#EFF6FCDE] rounded-3xl">
                          <div className="flex gap-8 items-center">
                            <button>
                              <GrAttachment className="text-[#333333] text-xl" />
                            </button>
                            <textarea
                              name="msg"
                              id="msg"
                              cols="55"
                              rows="1"
                              value={message}
                              onChange={(e) => {setMessage(e.target.value)}}
                              className="outline-none font-IBM-Sans text-base bg-transparent  "
                              placeholder="Type your message"
                              onKeyPress={(e) => {
                                if (e.key == "Enter") {
                                  // <>
                                  //   <p>{e.target.value}</p>
                                  // </>;
                                  console.log(e.target.value);
                                }
                              }}
                            ></textarea>
                          </div>
                          <div className="flex items-center gap-4">
                            <button type="submit">
                              <FiSend className="text-[#333333] text-xl" />
                            </button>
                            <button>
                              <BsEmojiSmile className="text-[#333333] text-xl" />
                            </button>
                            <button>
                              <BsCamera className="text-[#333333] text-2xl" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Chat;
