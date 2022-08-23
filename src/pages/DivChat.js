/* eslint-disable no-unused-vars */

import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const DivChat = () => {
    const user = JSON.parse(localStorage.getItem("aicteuser"));

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
    }`
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
    }

    const { loading, err, data, refetch } = useQuery(CHATS_QUERY, {
        variables: { seconduser: user.id },
    });
    if (loading) {
        return <h3>Loading...</h3>;
    }
    console.log(data);
    return (
        <main className="flex">
            <div className="p-4 m-4">
                {newMessage ? (
                    <>
                        {/* show all users  */}
                        <h3 className="">New Message</h3>
                        <ul className="">
                            {data.getUsers.map((user) => (
                                <li key={user.id}>
                                    <button
                                        className="border my-2 font-bold py-2 px-4 rounded"
                                        onClick={() => {
                                            openChatBox(user.id, user.name);
                                            setNewMessage(false);
                                        }}
                                    >
                                        {user.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        {/* inbox */}
                        <h3 className="font-semibold">Inbox</h3>
                        <ul className="space-y-2">
                        <li key="everyone">
                            <button
                                className="bg-gray-150"
                                onClick={() => {
                                    setCommonChat(true);
                                }}
                            >
                                @everyone
                            </button>
                        </li>

                        
                            {data?.getInbox.map((inbox) => (
                                <li key={inbox._id} className=" bg-gray-150">
                                    <button
                                        className="text-start"
                                        onClick={() =>
                                            openChatBox(
                                                user.id === inbox.user1
                                                    ? inbox.user2
                                                    : inbox.user1,
                                                user.id === inbox.user1
                                                    ? inbox.user2_name
                                                    : inbox.user1_name
                                            )
                                        }
                                    >
                                        <div className="">
                                            <h3 className="">
                                                {user.id === inbox.user1
                                                    ? inbox.user2_name
                                                    : inbox.user1_name}
                                            </h3>
                                            <div className="text-xs flex items-center justify-between space-x-3 last:">
                                                <span>{inbox.lastmessage}</span>
                                                <span className="">
                                                    {new Date(
                                                        inbox.updatedAt
                                                    ).toString()}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {/* new message  */}
                <div className="flex justify-end">
                    <button
                        className="text-xl bg-green-600 text-white p-2 px-4 rounded-full"
                        onClick={() => setNewMessage(true)}
                    >
                        +
                    </button>
                </div>
            </div>

            {/* common chat for every one  */}
            {commonchat && (
                <div className="p-4 m-4">
                    <h3 className="">@everyone</h3>
                    <ul className="space-y-2">
                        {data?.getCommonMessages.map((chat) => (
                            <li key={chat._id} className=" bg-gray-150">
                                <div className="">
                                    <h3 className="">{chat.user_name}</h3>
                                    <div className="text-xs flex items-center justify-between space-x-3 last:">
                                        <span>{chat.message}</span>
                                        <span className="">
                                            {new Date(
                                                chat.createdAt
                                            ).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* send common message  */}
                    <div className="mt-2">
                        <form className="" onSubmit={sendCommonMessage}>
                            <input
                                type="text"
                                className="p-1 border"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="p-1 rounded-md bg-green-500 text-white"
                            >
                                Send
                            </button>
                        </form>
                    </div> 
                </div>
             )} 
            {/* user chat  */}
            {openchat.open && (
                <div>
                    <div className="p-4 m-4">
                        <div className="">
                            <h3 className="">{openchat.name}</h3>
                        </div>
                        <ul className="space-y-2">
                            {data?.getMessages.map((chat) => (
                                <li key={chat._id} className=" bg-gray-150">
                                    <div className="">
                                        {/* <h3 className="">{user.id===chat.user1 ? chat.user2_name : chat.user1_name}</h3> */}
                                        <div className="text-xs flex items-center justify-between space-x-3 last:">
                                            <span>{chat.message}</span>
                                            <span className="">
                                                {new Date(
                                                    chat.createdAt
                                                ).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* send message  */}
                        <div className="mt-2">
                            <form className="" onSubmit={sendMessage}>
                                <input
                                    type="text"
                                    className="p-1 border"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="p-1 rounded-md bg-green-500 text-white"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default DivChat;
