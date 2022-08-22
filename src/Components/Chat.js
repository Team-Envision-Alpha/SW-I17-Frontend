import React from "react";

import ChatSecOne from "./ChatSecOne";
import ChatSecTwo from "./ChatSecTwo";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const Chat = ({ title }) => {
  const user = JSON.parse(localStorage.getItem("aicteuser"));

  const [openchat, setOpenchat] = React.useState({
    open: false,
    seconduser: "",
    name: "",
  });
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState(true);
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
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-[65vw]">
        {/* chat sec-1 */}
        <ChatSecOne
          newMessage={newMessage}
          data={data}
          openChatBox={openChatBox}
          setNewMessage={setNewMessage}
          setCommonChat={setCommonChat}
          user={user}
        />
        {/* chat-sec-2 */}
        <ChatSecTwo />
      </div>
    </>
  );
};

export default Chat;
