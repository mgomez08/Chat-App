import React from "react";
import { ChatContainer } from "../components/Chat/ChatContainer/ChatContainer";
import { ChatSelect } from "../components/Chat/ChatSelect";
import { ChatsSidebar } from "../components/Chat/ChatsSidebar/ChatsSidebar";
import "../css/chat.css";

export const ChatPage = () => {
  return (
    <div className="app">
      <ChatsSidebar />
      {true ? <ChatContainer /> : <ChatSelect />}
    </div>
  );
};
