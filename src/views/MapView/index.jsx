//import MapComponent from "../../modules/Map/components/Map"
import MenuRoute from "../../modules/Map/components/MenuRoute"
import MapComponent from "../../modules/Map/components/Map"
import MenuReport from "../../modules/Map/components/MenuReport"

const MapView = () => (
    <div>
        <MapComponent />
        <MenuRoute />
        <MenuReport />
    </div>
);

export default MapView;