import React, { useContext } from "react";
import { ChatContainer } from "../components/Chat/ChatContainer/ChatContainer";
import { ChatSelect } from "../components/Chat/ChatSelect";
import { ChatsSidebar } from "../components/Chat/ChatsSidebar/ChatsSidebar";
import { ChatContext } from "../context/chat/ChatContext";
import "../css/chat.css";

export const ChatPage = () => {
  const { chatState } = useContext(ChatContext);
  return (
    <div className="app">
      <ChatsSidebar />
      {chatState.chatActive ? <ChatContainer /> : <ChatSelect />}
    </div>
  );
};
