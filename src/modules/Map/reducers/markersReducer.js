import {addMarkerItem} from "../actions/actionTypes"

// поставити до прикладу десь на карті 3 маркери різні
const initialState = [
    {
        // шось типу такого думаю створювати
        id: 1,
        type: "bad road"
    }

];

const markersReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMarkerItem:
            return [
                ...state,
                {
                    id: state.length + 1,
                    type: action.payload.type
                },
            ];
        default:
            return state;
    }
};



export default markersReducer;