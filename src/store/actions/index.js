import { ADD_TO_FAV, REMOVE_FROM_FAV, LOADING, RESULTS_UPDATED, FETCH_ERROR } from "./types";

export const addToFav = job => ({
    type: ADD_TO_FAV,
    payload: job
})

export const removeFromFav = job => ({
    type: REMOVE_FROM_FAV,
    payload: job
})

export const fetchJobs = (description, location) => async dispatch => {
    dispatch({ type: LOADING })

    const response = await fetch(`https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`)
    const results = await response.json()

    if (response.ok) {
        dispatch({ type: RESULTS_UPDATED, payload: results })
    } else {
        dispatch({ type: FETCH_ERROR, payload: "Failed to update jobs" })
    }

}