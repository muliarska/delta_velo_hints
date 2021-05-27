import { connect } from "react-redux";

import { useForm, Controller } from "react-hook-form";
import { addMarkerItem } from "../../actions/actionTypes";

const EditMarkers = ({ open, handleClose, addMarkerItemAction }) => {
    const { control, handleSubmit, getValues, errors } = useForm();

    const onSubmit = () => {
        if (!errors) {
            const values = getValues();
            console.log("ok");
            addMarkerItemAction(values);

            handleClose();
        }
    };

    return (
        // add return items
    );
};



const mapDispatchToProps = (dispatch) => ({
    addMarkerItemAction: (markerItem) =>
        dispatch({ type: addMarkerItem, payload: markerItem }),
});

export default connect(null, mapDispatchToProps)(EditMarkers);
