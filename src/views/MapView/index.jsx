//import MapComponent from "../../modules/Map/components/Map"
import MenuRoute from "../../modules/Map/components/MenuRoute"
import MyMap from "../../modules/Map/components/Map"
import MenuReport from "../../modules/Map/components/MenuReport"

function MapView() {
    return (
        <div>
            <MyMap />
            <MenuRoute/>
            <MenuReport/>
        </div>
    )

}

export default MapView;