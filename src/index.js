import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";
import MapView from "./views/MapView"



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
                        <MapView />
                    </Route>
              </Switch>
        </Router>
  </React.StrictMode>,
    document.getElementById('root')
);
