import React from 'react';
import PropTypes from 'prop-types';

import "./styles.css"

const EditPopup = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="popup">
        <div>

          <input
            placeholder="Title"
            name="title"
            type="text"
            className="marker-name"
            onChange={props.handleChange}
            value={props.title}
          />

        </div>

        <div className="popup-button-container">
          <button type="submit" className="button">Save</button>
          <button type="button" className="button button_back" onClick={props.goBack}>Back</button>
        </div>

      </div>
    </form>
  );
};

EditPopup.propTypes = {
  goBack: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  logoUrl: PropTypes.string,
  title: PropTypes.string
};

export default EditPopup;
