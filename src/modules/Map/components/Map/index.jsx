import React from "react";
import { TileLayer, Marker, Popup, Map} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import './styles.module.css';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../../../../assets/icon/marker.png';


class MyMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 49.918313,
            lng: 24.182573,
            zoom: 13,
            isMapInit: false,

            markers: [],
            routing_markers: []
        };
    };

    saveMap = map => {
        this.map = map;
        this.setState({
            isMapInit: true
        });
    };

    render() {
        const { lat, lng, zoom } = this.state;
        const position = [lat, lng];

        const myIcon = L.icon({
            iconUrl: markerIcon,
            iconSize: [38, 40],
            iconAnchor: [32, 64],
            popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null
        });

        return (
                <Map className={'map'}
                     style={{ height: 950 }}
                     center={position}
                     zoom={zoom}
                     ref={this.saveMap}>

                    <TileLayer
                        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2xhdmtvcHJ5dHVsYSIsImEiOiJja281cnRmdjQwODl5MnZwZGdmeW1hb3N3In0.mhPtHgPEkyIHhGCQcNJNlA"
                    />

                    <Marker
                        position={position}
                        icon={myIcon}
                    >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
        )
    }
}

export default MyMap;
