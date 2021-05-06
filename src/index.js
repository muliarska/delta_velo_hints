import React from "react";
import ReactDOM from "react-dom";
import MapComponent from "./Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/sign_up">
          <SignUpView />
        </Route>

        <Route path="/map">
            <MapComponent />
        </Route>
        
      </Switch>
    </Router>
  </React.StrictMode>
  , rootElement
);
