import React, { useContext, useEffect } from "react";
import { createContext } from "react";

import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "./chat/ChatContext";

import { useSocket } from "../hooks/useSocket";

import { types } from "../types/types";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const { socket, online, socketConnect, socketDisconnect } = useSocket(
    "http://localhost:8080"
  );
  //userConnect
  useEffect(() => {
    if (auth.logged) {
      socketConnect();
    }
  }, [auth, socketConnect]);
  //userDisconnect
  useEffect(() => {
    if (!auth.logged) {
      socketDisconnect();
    }
  }, [auth, socketDisconnect]);
  //Listen to changes in connected users
  useEffect(() => {
    socket?.on("users-list", (users) => {
      dispatch({
        type: types.loadUsers,
        payload: users,
      });
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
