import React from 'react';
import ReactDOM from 'react-dom';
import leaflet from 'leaflet';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";
import MapView from "./views/MapView"

delete leaflet.Icon.Default.prototype._getIconUrl;
const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');
leaflet.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
