import { combineReducers } from "redux";

import markersReducer from "./modules/Map/reducers/markersReducer"

const rootReducer = combineReducers({
    markersItems: markersReducer,
});

export default rootReducer;
