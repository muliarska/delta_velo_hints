// import { MapLayer } from "react-leaflet";
// import L from "leaflet";
// import "leaflet-routing-machine";
// // import "lrm-google";
// import { withLeaflet } from "react-leaflet";


// const accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

// class Routing extends MapLayer {
//   createLeafletElement() {
//     const { map } = this.props;
//     let leafletElement = L.Routing.control({
//       router: L.Routing.mapbox(accessToken, {
//         unit: 'metric',
//         profile : 'mapbox/cycling',
//         language: 'en',
//         alternatives: true,
//         geometries: 'geojson',
//         controls: { instructions: false },
//         flyTo: false
//       }),
//       waypoints: [
//         L.latLng(16.506, 80.648),
//         L.latLng(17.384, 80.4866),
//         L.latLng(12.971, 77.5945)
//       ],
//       // router: new L.Routing.Google(),
//       lineOptions: {
//         styles: [
//           {
//             color: "gray",
//             opacity: 0.7,
//             weight: 6
//           }
//         ]
//       },
//       addWaypoints: false,
//       draggableWaypoints: true,
//       fitSelectedRoutes: false,
//       showAlternatives: true
//     }).addTo(map.leafletElement);
//     leafletElement.hide();

//     return leafletElement.getPlan();
//   }
// }
// export default withLeaflet(Routing);
