import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/types"

const initialState = {
    favourites: []
}

export default function FavReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_FAV:
            return {
                ...state,
                favourites: [...state.favourites.filter(f => f.id !== action.payload.id), action.payload]
            }
        case REMOVE_FROM_FAV:
            return {
                ...state,
                favourites: state.favourites.filter(f => f.id !== action.payload.id)
            }
        default: return state
    }

}