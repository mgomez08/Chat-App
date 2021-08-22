import React from "react";
import avatar from "../../../assets/avatar.jpg";
export const HeaderChats = () => {
  return (
    <div class="header-chats">
      <img src={avatar} alt="avatar" class="img-avatar" />
      <h2 class="username">Marlon Gómez</h2>
      <button class="button-logout">Salir</button>
    </div>
  );
};
