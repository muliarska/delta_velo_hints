import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';

import { createMarker } from '../../actions';
import MarkersContainer from '../MarkersContainer';
import Routing from "../Routing"

import InitMarker from "../../../assets/icon/marker.png";


let counter = 0
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
      lat: 57.74,
      lng: 11.94,
      zoom: 13,
      isMapInit: false
    }
  }

  handleMapClick(e) {
    counter++;
    const marker = {
      title: 'NewMarker',
      logo: InitMarker,
      id: Math.random()
          .toString(36)
          .substr(2, 9),
      lat: e.latlng.lat,
      lng: e.latlng.lng
    };

    this.props.createMarker(marker);
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const { markers } = this.props;
    return (
        <Map
            center={position}
            zoom={this.state.zoom}
            style={this.state.mapStyles}
            onClick={this.handleMapClick}
            ref={this.saveMap}
        >

          <TileLayer url={this.state.tileLayerUrl} />
          <MarkersContainer markers={markers} />
          {this.state.isMapInit && counter === 2 && <Routing map={this.map} />}
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
