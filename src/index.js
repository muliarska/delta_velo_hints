import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";
import MapView from "./views/MapView"

import rootReducer from "./rootReducer";
import './index.css';

const store = createStore(
    rootReducer
);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Redirect exact from="/" to="/login" />
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
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
