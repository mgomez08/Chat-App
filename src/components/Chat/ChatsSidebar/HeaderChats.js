import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/avatar.jpg";
export const HeaderChats = () => {
  return (
    <div className="header-chats">
      <img src={avatar} alt="avatar" className="img-avatar" />
      <h2 className="username">Marlon Gómez</h2>
      <Link to="/auth/login">
        <button className="button-logout">Salir</button>
      </Link>
    </div>
  );
};
