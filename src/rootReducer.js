import { combineReducers } from 'redux-immutable';

import markers from './modules/Map/reducers/markers';

const rootReducer = combineReducers({
    markers,
});

export default rootReducer;