import React, { createContext, useCallback, useState } from "react";
import { fetchWithoutToken } from "../helpers/fetch";

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

  const login = async (email, password) => {
    const response = await fetchWithoutToken(
      "auth/",
      { email, password },
      "POST"
    );
    console.log(response);
  };
  const register = (name, email, password) => {
    console.log(name, email, password);
  };
  const verifyToken = useCallback(() => {
    console.log("verifytoken");
  });
  const logout = () => {
    console.log("logout");
  };
  return (
    <AuthContext.Provider
      value={{
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
