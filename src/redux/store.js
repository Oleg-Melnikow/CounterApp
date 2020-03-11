import {combineReducers, createStore} from "redux";
import {countReducer} from "./countReducer";
import {timerReducer} from "./timerReducer";

const reducer = combineReducers({
    counter: countReducer,
    timer: timerReducer
})
const store = createStore(reducer);
window.store = store;

export default store;