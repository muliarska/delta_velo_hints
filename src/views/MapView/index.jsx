//import MapComponent from "../../modules/Map/components/Map"
import MenuRoute from "../../modules/Map/components/MenuRoute"
import MapComponent from "../../modules/Map/components/Map"
import MenuReport from "../../modules/Map/components/MenuReport"
import styles from "./styles.module.css";

const MapView = () => (
    <div>
        <MenuRoute />
        <MapComponent/>
    {/*<MenuReport />*/}
    </div>
);

export default MapView;