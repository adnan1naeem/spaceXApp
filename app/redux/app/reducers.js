import * as types from "./types";

const initialState = {
    spaceData: [],
};

function userReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case types.GET_DATA: {
            return {
                ...state,
                spaceData: payload,
            };
        }
        default:
            return state;
    }
}

export default userReducer;
