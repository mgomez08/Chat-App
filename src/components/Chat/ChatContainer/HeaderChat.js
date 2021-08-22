import React from "react";
import avatar from "../../../assets/avatar.jpg";
export const HeaderChat = () => {
  return (
    <div className="header-chat">
      <img src={avatar} alt="avatar" class="img-avatar" />
      <h2 class="friend-name">Andrés</h2>
    </div>
  );
};
