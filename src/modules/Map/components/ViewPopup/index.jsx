import React from 'react';
import { Map as ImmutableMap } from 'immutable';
import PropTypes from 'prop-types';
import InitMarker from "../../../assets/icon/marker.png";

import './styles.css';

const ViewPopup = props => {
  return (
    <div className="popup">
      <div className="popup-logo-container">
        <img
          className="logo"
          src={InitMarker}
        />
      </div>

      <div className="popup-title-container">
        <h2>{props.markerData.get('title')}</h2>
      </div>

      {/* <div className="popup__position-container">
        <p className="position">{`Position: Lat ${props.markerData
          .get('lat')
          .toFixed(6)} - Long ${props.markerData.get('lng').toFixed(6)}`}</p>
      </div> */}

      <div className="popup-button-container">
        <button onClick={props.editMode} className="button">Edit</button>
        <button onClick={props.deleteMarker} className="button button_delete">Delete</button>
      </div>
      
    </div>
  );
};

ViewPopup.propTypes = {
  markerData: PropTypes.instanceOf(ImmutableMap).isRequired,
  editMode: PropTypes.func,
  deleteMarker: PropTypes.func
};

export default ViewPopup;
