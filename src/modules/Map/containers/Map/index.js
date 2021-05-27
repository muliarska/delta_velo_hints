import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';

import { createMarker } from '../../actions';
import MarkersContainer from '../MarkersContainer';

import InitMarker from "../../../assets/icon/marker.png";


const token = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2xhdmtvcHJ5dHVsYSIsImEiOiJja281cnRmdjQwODl5MnZwZGdmeW1hb3N3In0.mhPtHgPEkyIHhGCQcNJNlA";

class MyMap extends Component { 
  constructor(props) {
    super(props);
    this.handleMapClick = this.handleMapClick.bind(this);

    this.state = {
      mapStyles: {
        height: '100vh',
        width: '100vw'
      },
      tileLayerUrl: token,
      initPosition: [49.918313, 24.182573],
      zoom: 15
    }
  }
  
  handleMapClick(e) {
    const marker = {
      title: 'NewMarker',
      logo: InitMarker,
      id: Math.random() // TODO: fix the indexng | from this to +1
        .toString(36)
        .substr(2, 9),
      lat: e.latlng.lat,
      lng: e.latlng.lng
    };

    this.props.createMarker(marker);
  }

  render() {
    const { markers } = this.props;
    return (
      <Map
        center={this.state.initPosition}
        zoom={this.state.zoom}
        style={this.state.mapStyles}
        onClick={this.handleMapClick}
      >

        <TileLayer url={this.state.tileLayerUrl} />
        <MarkersContainer markers={markers} />

      </Map>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createMarker
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    markers: state.getIn(['markers'])
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);
