import { FETCH_ERROR, LOADING, RESULTS_UPDATED } from "../actions/types";

const initialState = {
    list: []
}

export default function ResultsReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_ERROR:
            alert("Error fetching.")
            return initialState
        case LOADING:
            console.log("Loading...")
            return state
        case RESULTS_UPDATED:
            return {
                ...state,
                list: payload
            }
        default: return state
    }
}