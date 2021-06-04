import store from "../../../../store"
import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";


class Routing extends MapLayer {
    createLeafletElement() {
        const state = store.getState()

        const { map } = this.props;
        let leafletElement = L.Routing.control({
            waypoints: [L.latLng(
                state._root["entries"][0][1]._tail.array[0]._root.entries[3][1],
                state._root["entries"][0][1]._tail.array[0]._root.entries[4][1]),

                L.latLng(
                    state._root["entries"][0][1]._tail.array[1]._root.entries[3][1],
                    state._root["entries"][0][1]._tail.array[1]._root.entries[4][1]
                )],
        }).addTo(map.leafletElement);
        leafletElement.hide();
        return  leafletElement.getPlan();
    }
}
export default withLeaflet(Routing);