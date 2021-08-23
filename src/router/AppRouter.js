import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);
  useEffect(() => {
    verifyToken();
    // eslint-disable-next-line
  }, []);
  if (auth.checking) {
    return <h3>x</h3>;
  }
  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            path="/auth"
            isAuthenticated={auth.logged}
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={auth.logged}
            component={ChatPage}
          />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
};
