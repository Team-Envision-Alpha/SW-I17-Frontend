import React from "react";

import ChatSecOne from "./ChatSecOne";
import ChatSecTwo from "./ChatSecTwo";

const Chat = ({ title }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-[65vw]">
        {/* chat sec-1 */}
        <ChatSecOne />
        {/* chat-sec-2 */}
        <ChatSecTwo />
      </div>
    </>
  );
};

export default Chat;
