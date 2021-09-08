import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import coctails from "../reducers/coctails"
import coctail from "../reducers/coctail"

const rootReducer = combineReducers({
    coctails,
    coctail
})

export const store = createStore(rootReducer, applyMiddleware(thunk))