import React from "react";
import addChat from "../Assets/Images/addChat.svg";
import searchIcon from "../Assets/Images/searchIcon.svg";
import logo from "../Assets/Images/aicte.png";

const ChatSecOne = (
  newMessage,
  data,
  openChatBox,
  setNewMessage,
  setCommonChat,
  user
) => {

  console.log(data)
  return (
    <>
      <div className="col-span-1 bg-white shadow-md rounded-2xl  h-fit">
        <div className="flex flex-col gap-4 font-IBM-Sans p-4">
          {/* header */}
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl tracking-wide">
              {newMessage ? "Start new conversation" : "AICTE users Chat"}
            </p>
            <button>
              <img
                src={addChat}
                alt="addChat"
                className="text-base"
                width={25}
              />
            </button>
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

          {/* Normal Chat list */}
          {newMessage ? (
            <div>
              {/* Fixed Announcements */}
              <ul className="flex flex-col gap-2">
                    {/* <li key={user.id}>
                      <button
                        className="border my-2 font-bold py-2 px-4 rounded"
                        onClick={() => {
                          openChatBox(user.id, user.name);
                          setNewMessage(false);
                        }}
                      >
                        {user.name}
                      </button>
                    </li> */}
                {data?.getUsers?.map((user) => {
                  console.log(user)
                  return (
                    <li>
               
                  <div className="flex justify-between items-center ">
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
                        <p className="text-base text-[#65676B]">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>
                </li>

                  )
                }
                )}


                
              </ul>
            </div>
          ) : (
            <div>
              {/* Fixed Announcements */}
              <ul className="flex flex-col gap-2">
                <li>
                  <div className="flex items-center gap-6">
                    <div>
                      <img
                        src={logo}
                        alt="logo"
                        className="w-[3vw] h-[6vh] rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-lg">text</p>
                      <p className="text-base text-[#65676B]">text</p>
                    </div>
                  </div>
                  <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>
                </li>

                <li>
                  {/* recent chats */}
                  <div className="flex justify-between items-center ">
                    <div className="flex items-center gap-6">
                      <div>
                        <img
                          src={logo}
                          alt="logo"
                          className="w-[3vw] h-[6vh] rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg">text</p>
                        <p className="text-base text-[#65676B]">text</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-light">text</p>
                      <div className="rounded-full bg-red-600 w-[2vw] h-[4vh] text-white flex justify-center items-center">
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 border-b-[#B4ABABA8] w-full py-1 px-4"></div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatSecOne;
