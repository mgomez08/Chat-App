import React from "react";
import avatar from "../../../assets/avatar.jpg";

export const ChatItem = ({ setIsSelect, user }) => {
  const hola = () => {
    setIsSelect(true);
  };
  return (
    <div className="chat-item" onClick={hola}>
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
