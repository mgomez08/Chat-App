import React from "react";
import { MessageIncoming } from "./MessageIncoming";
import { MessageOutgoing } from "./MessageOutgoing";

export const Chat = () => {
  const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="chat">
      {messages.map((message) => {
        return message % 2 === 0 ? <MessageIncoming /> : <MessageOutgoing />;
      })}
    </div>
  );
};
