import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import fav from './reducers/favourites'
import results from './reducers/results'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(combineReducers({ fav, results }), {}, composeEnhancer(applyMiddleware(thunk)))