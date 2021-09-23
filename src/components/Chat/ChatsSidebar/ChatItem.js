import React, { useContext } from "react";
import avatar from "../../../assets/avatar.jpg";
import { ChatContext } from "../../../context/chat/ChatContext";
import { fetchWithToken } from "../../../helpers/fetch";
import { types } from "../../../types/types";

export const ChatItem = ({ user }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const onClick = async () => {
    dispatch({
      type: types.activeChat,
      payload: user.uid,
    });
    //Load messages
    const response = await fetchWithToken(`messages/${user.uid}`);
    if (response.ok) {
      dispatch({
        type: types.loadMessages,
        payload: response.messages,
      });
    }
  };
  return (
    <div
      className={`chat-item ${
        user.uid === chatState.chatActive && "chat-active"
      }`}
      onClick={onClick}
    >
      <div className="img-and-status">
        <img src={avatar} alt="avatar" className="img-friend" />
        <div
          className={`circle-status ${user.online ? "online" : "offline"}`}
        ></div>
      </div>
      <div className="sumary">
        <div className="info-msg">
          <p className="friend-name">{user.name}</p>
          <span className="date-last-msg">7:33 p.m</span>
        </div>
        <div className="last-msg-container">
          <p className="last-msg">¡Hola miguel como estás? espero que bien.!</p>
        </div>
      </div>
    </div>
  );
};
