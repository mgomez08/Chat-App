import React from "react";
import { ChatsList } from "./ChatsList";
import { HeaderChats } from "./HeaderChats";

export const ChatsSidebar = () => {
  return (
    <div className="chats-sidebar">
      <HeaderChats />
      <ChatsList />
    </div>
  );
};
