
import MyMap from "../../modules/Map/containers/Map"
import MenuReport from "../../modules/Map/components/MenuReport"
import MenuRoute from "../../modules/Map/components/MenuRoute"

import React from 'react';

function MapView() {
    return (
        <div>
            <MyMap />
            <MenuReport/ >
            <MenuRoute/ >
        </div>
    )

}

export default MapView;