import React from "react";
import { Chat } from "./Chat";
import { HeaderChat } from "./HeaderChat";
import { SendMessage } from "./SendMessage";

export const ChatContainer = () => {
  return (
    <div className="chat-container">
      <HeaderChat />
      <Chat />
      <SendMessage />
    </div>
  );
};
