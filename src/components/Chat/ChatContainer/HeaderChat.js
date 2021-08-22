import React from "react";
import avatar from "../../../assets/avatar.jpg";
export const HeaderChat = () => {
  return (
    <div className="header-chat">
      <img src={avatar} alt="avatar" className="img-avatar" />
      <h2 className="friend-name">Andrés</h2>
    </div>
  );
};
