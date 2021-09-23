import React, { createContext, useCallback, useContext, useState } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const { dispatch } = useContext(ChatContext);

  const login = async (email, password) => {
    const response = await fetchWithoutToken(
      "auth/",
      { email, password },
      "POST"
    );
    if (response.ok) {
      const { user } = response;
      localStorage.setItem("token", response.token);
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
      return { ok: true };
    }
    return response;
  };
  const register = async (name, email, password) => {
    const response = await fetchWithoutToken(
      "auth/signUp",
      { name, email, password },
      "POST"
    );
    if (response.ok) {
      const { user } = response;
      localStorage.setItem("token", response.token);
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
      console.log("register");
      return { ok: true };
    }
    return response;
  };
  // eslint-disable-next-line
  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth({
        checking: false,
        logged: false,
      });
      return false;
    } else {
      const response = await fetchWithToken("auth/revalidateToken");
      if (response.ok) {
        localStorage.setItem("token", response.token);
        const { user } = response;
        setAuth({
          uid: user.uid,
          checking: false,
          logged: true,
          name: user.name,
          email: user.email,
        });
        console.log("Auth");
        return true;
      } else {
        setAuth({
          checking: false,
          logged: false,
        });
        return false;
      }
    }
  });
  const logout = () => {
    localStorage.removeItem("token");
    dispatch({
      type: types.logout,
    });
    setAuth({
      checking: false,
      logged: false,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
