import React from "react";
import { ChatItem } from "./ChatItem";

export const ChatsList = ({ setIsSelect }) => {
  const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="chats">
      {chats.map((chat) => (
        <ChatItem setIsSelect={setIsSelect} key={chat} />
      ))}
    </div>
  );
};
