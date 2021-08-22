import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

import "../css/auth.css";

export const AuthRouter = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/auth/login" component={LoginPage} />
        <Route exact path="/auth/register" component={RegisterPage} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
