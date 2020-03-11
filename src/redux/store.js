import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {countReducer} from "./countReducer";
import {timerReducer} from "./timerReducer";

const reducer = combineReducers({
    counter: countReducer,
    timer: timerReducer
})
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;