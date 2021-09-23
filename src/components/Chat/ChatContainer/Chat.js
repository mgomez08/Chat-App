import React, { useContext } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { ChatContext } from "../../../context/chat/ChatContext";
import { MessageIncoming } from "./MessageIncoming";
import { MessageOutgoing } from "./MessageOutgoing";

export const Chat = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  return (
    <div className="chat" id="chat">
      {chatState.messages.map((message) => {
        return message.to === auth.uid ? (
          <MessageIncoming key={message._id} message={message} />
        ) : (
          <MessageOutgoing key={message._id} message={message} />
        );
      })}
    </div>
  );
};
