import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/avatar.jpg";
import { AuthContext } from "../../../auth/AuthContext";

export const HeaderChats = () => {
  const { auth, logout } = useContext(AuthContext);
  return (
    <div className="header-chats">
      <img src={avatar} alt="avatar" className="img-avatar" />
      <h2 className="username">{auth.name}</h2>
      <Link to="/auth/login">
        <button className="button-logout" onClick={logout}>
          Salir
        </button>
      </Link>
    </div>
  );
};
