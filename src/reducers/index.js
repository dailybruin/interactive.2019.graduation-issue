const initialState = {
    location: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "SET_LOCATION":
            return {
                ...state,
                location: action.location
            };
        default:
            return initialState;
    }
}
