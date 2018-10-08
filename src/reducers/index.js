export const initialState = {
    points: [{ left: 230, top: 475 }],
    history: []
};

export function rootReducers(state = initialState, action) {
    switch (action.type) {
        case "NEW_POINTS":
            return {
                ...state,
                points: action.payload
            };
        case "CLEAR_POINTS":
            return {
                ...state,
                points: action.payload,
                history: []
            };
        case "ADD_HISTORY":
            return {
                ...state,
                history: action.payload
            };
        default:
            return state;
    }
}
