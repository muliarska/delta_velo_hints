import React, { Component, useState, useEffect, useRef } from "react";
import { Map, TileLayer, withLeaflet, MapControl, Marker, Popup, LeafletConsumer, MapLayer } from "react-leaflet";
import MapInfo from "./MapInfo";
import Routing from "./RoutingMachine";
import L from "leaflet";
import "leaflet-routing-machine";
import './Icons'


const accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


var routing = false;
var markers = [];
var control;
var map = NaN;

var route = NaN;

var modal = document.getElementById("myModal");
var directionsStart = document.getElementById("directionsStart");
var span = document.getElementsByClassName("close")[0];

var badRoadReportButton = document.getElementById("badRoadReportButton");
var accidentReportButton = document.getElementById("accidentReportButton");
var parkingPlaceReportButton = document.getElementById("parkingPlaceReportButton");
var closeButtonReport = document.getElementById("closeButtonReport");


var cancelRouteButton = document.getElementById('cancelRouteButton');
var startMenuButton = document.getElementById('startMenuButton');


var startNewRouteButton = document.getElementById("startNewRouteButton");
var closeButton = document.getElementById("closeButton");


function onLoad(e) {
  // map.setView([coordinates], 8);
  loadDirectionsStart();
}

function loadDirectionsStart (e) {
  directionsStart.style.display = "block";
}

function startMenu() {
  console.log("starting menu");
  cancelRouteButton.style.display = 'none';
  startMenuButton.style.display = 'none';
  loadDirectionsStart();
}

function cancelRoute(layer) {
  console.log("canceling route");
  cancelRouteButton.style.display = 'none';
  startMenuButton.style.display = 'inline-block';

  if (route) {
    route.removeRoute(route)
  }
}



function makeReport(markers) {
  var response = "";

  modal.style.display = "block";

  badRoadReportButton.onclick = function(event) {
    modal.style.display = "none";
    console.log("badRoadReportButton")
    response = "badRoadReportButton"
    // marker.bindPopup("Bad Road");
    // marker.setIcon(badRoadIcon);
  }

  accidentReportButton.onclick = function(event) {
    modal.style.display = "none";
    console.log("accidentReportButton")
    response = "accidentReportButton"
    // marker.bindPopup("Accident");
    // marker.setIcon(accidentIcon);
  }

  parkingPlaceReportButton.onclick = function(event) {
    modal.style.display = "none";
    console.log("parkingPlaceReportButton")
    response = "parkingPlaceReportButton"
    // marker.bindPopup("Parking Place");
    // marker.setIcon(parkingIcon);
  }

  closeButtonReport.onclick = function(event) {
    modal.style.display = "none";
    console.log("Closing")
    startMenuButton.style.display = 'inline-block';
    markers.pop();
  }

  return response;
}


startNewRouteButton.onclick = function(event) {
  directionsStart.style.display = "none";
  console.log("Starting new route");
  routing = true;
  cancelRouteButton.style.display = 'inline-block';
  startMenuButton.style.display = 'none';
}

closeButton.onclick = function(event) {
  directionsStart.style.display = "none";
  console.log("Closing start screen")
  startMenuButton.style.display = 'inline-block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  directionsStart.style.display = "none";
  startMenuButton.style.display = 'inline-block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    startMenuButton.style.display = 'inline-block';
  }
  else if (event.target == directionsStart) {
    directionsStart.style.display = "none";
    startMenuButton.style.display = 'inline-block';
  }
}



startMenuButton.onclick = function(event) {
  startMenu();
}

cancelRouteButton.onclick = function(event) {
  cancelRoute(map);
}


class Route {
  constructor(markers) {
    // super();
    this.route = NaN;
    this.markers = markers;
    this.createRoute();
  }

  createRoute() {
    this.route = L.Routing.control({
      router: L.Routing.mapbox(accessToken, {
        unit: 'metric',
        profile : 'mapbox/cycling',
        language: 'en',
        alternatives: true,
        geometries: 'geojson',
        controls: { instructions: false },
        flyTo: false
      }),
      waypoints: [
        L.latLng(this.markers[0]['position']),
        L.latLng(this.markers[1]['position'])
      ],
      lineOptions: {
        styles: [
          {
            color: "gray",
            opacity: 0.7,
            weight: 6
          }
        ]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: true
    }).addTo(map.leafletElement);
    this.route.hide();

    // handleFlyTo();
    // function handleFlyTo() {
      // const { current = {} } = useRef();
      // const { leafletElement: map } = useRef(null);
      // map.flyTo(markers[0]['position'], 14);
    // }

    routing = false;
    // .flyTo(markers[0]['position']);

    return this.route;
  }

  removeRoute() {
    this.route.remove();
  }
}



function getIcon(name) {
  return L.icon({
    iconUrl: require('./marker_icons/' + name + '.png'),
    iconSize: [40, 40]
  })
}


class MapComponent extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

    this.state = {
      lat: 49.918313,
      lng: 24.182573,
      zoom: 8,
      isMapInit: false,

      markers: [],
      routing_markers: []

    };
  };
  
  saveMap = (layer) => {
    map = layer;
    this.setState({
      isMapInit: true
    });

    onLoad();
  };

  forceUpdateHandler(){
    this.forceUpdate();
  };


  addMarker = (e) => {
    // clearGeoResults();
    console.log('clicked')
    var coordinates = e.latlng
    
    if (!routing) {
      const {markers} = this.state
      
      const resp = makeReport(markers);
      this.forceUpdateHandler();
      console.log(resp)
      markers.push({
        'name': 'marker', 
        'position': coordinates
      })
      this.setState({markers})
      
    } else {
      var {routing_markers} = this.state

      routing_markers.push({
        'name': 'badRoad', 
        'position': coordinates
      })
      
      if (routing_markers.length == 2) {
        route = new Route(routing_markers);
        routing_markers = []
      }
      this.setState({routing_markers})
    }
  }



  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <Map className='map'
        center={position} 
        zoom={zoom} 

        onClick={this.addMarker} 
        ref={this.saveMap}

        >


        <TileLayer
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2xhdmtvcHJ5dHVsYSIsImEiOiJja281cnRmdjQwODl5MnZwZGdmeW1hb3N3In0.mhPtHgPEkyIHhGCQcNJNlA"
        />

        {this.state.markers.map((location, idx) => (
          <Marker 
            key={`marker-${idx}`} 
            position={location.position} 
            // icon={getIcon(location.name)}
            >
              
            <Popup>
              {location.name}
            </Popup>
          </Marker>
        ))}


        {/* {this.state.routing_markers.map((location, idx) => (
          <Marker 
            key={`marker-${idx}`} 
            position={location.position} 
            // icon={getIcon(location.name)}
            >
              
            <Popup>
              {location.name}
            </Popup>
          </Marker>
        ))} */}

      </Map>
    );
  }
}




export default MapComponent;
