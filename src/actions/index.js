export function addPoints(list) {
    return {
        type: "NEW_POINTS",
        payload: list
    };
}

export function clearPoints(list) {
    return {
        type: "CLEAR_POINTS",
        payload: list
    };
}

export function addHistory(list) {
    return {
        type: "ADD_HISTORY",
        payload: list
    };
}
