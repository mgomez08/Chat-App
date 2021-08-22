import React from "react";
import { ChatContainer } from "../components/Chat/ChatContainer/ChatContainer";
import { ChatSelect } from "../components/Chat/ChatSelect";
import { ChatsSidebar } from "../components/Chat/ChatsSidebar/ChatsSidebar";
import "../css/chat.css";

export const ChatPage = () => {
  const [isSelect, setIsSelect] = React.useState(false);
  return (
    <div className="app">
      <ChatsSidebar setIsSelect={setIsSelect} />
      {isSelect ? <ChatContainer /> : <ChatSelect />}
    </div>
  );
};
