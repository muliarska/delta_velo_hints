import React, { Component } from 'react';
import { Popup } from 'react-leaflet';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Map as ImmutableMap } from 'immutable';
import { connect } from 'react-redux';

import { deleteMarker } from '../../actions';
import ViewPopup from '../ViewPopup';
import EditContainer from '../EditContainer';

class PopupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };

    this.handleEditMode = this.handleEditMode.bind(this);
    this.resetEditMode = this.resetEditMode.bind(this);
    this.deleteMarker = this.deleteMarker.bind(this);
  }
  
  handleEditMode() {
    this.setState({
      edit: true
    });
  }
  
  resetEditMode() {
    this.setState({
      edit: false
    });
  }

  deleteMarker() {
    this.props.deleteMarker(this.props.markerData);
  }

  render() {
    const { markerData } = this.props;
    const { edit } = this.state;
    let popupContent;

    if (edit) {
      popupContent = (
        <EditContainer
          editMode={this.handleEditMode}
          goBack={this.resetEditMode}
          markerData={markerData}
        />
      );
    } else {
      popupContent = (
        <ViewPopup
          editMode={this.handleEditMode}
          deleteMarker={this.deleteMarker}
          markerData={markerData}
        />
      );
    }
    return (
      <Popup popupOpen onClose={this.resetEditMode}>
        {popupContent}
      </Popup>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteMarker
    },
    dispatch
  );

PopupContainer.propTypes = {
  markerData: PropTypes.instanceOf(ImmutableMap).isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(PopupContainer);
