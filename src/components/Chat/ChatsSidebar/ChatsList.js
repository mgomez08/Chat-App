import React, { useContext } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { ChatContext } from "../../../context/chat/ChatContext";
import { ChatItem } from "./ChatItem";

export const ChatsList = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  const users = chatState.users;
  return (
    <div className="chats">
      {users.map((user, i) => {
        if (user.uid !== auth.uid) {
          return <ChatItem user={user} key={i} />;
        }
        return null;
      })}
    </div>
  );
};
