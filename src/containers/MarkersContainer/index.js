import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Marker } from 'react-leaflet';

import { getMarkers } from './../../actions';
import PopupContainer from './../PopupContainer';

class MarkersContainer extends Component {

  render() {
    const { markers } = this.props;
    return (
      <div>
        {markers
          ? markers.map(markerData => (
              <Marker
                key={markerData.get('id')}
                position={[markerData.get('lat'), markerData.get('lng')]}
              >
                <PopupContainer markerData={markerData} />
              </Marker>
            ))
          : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMarkers
    },
    dispatch
  );

MarkersContainer.propTypes = {
  markers: PropTypes.instanceOf(List).isRequired
};

export default connect(null, mapDispatchToProps)(MarkersContainer);
