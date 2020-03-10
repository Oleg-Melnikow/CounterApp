import {combineReducers, createStore} from "redux";
import {countReducer} from "./countReducer";

const reducer = combineReducers({
    counter: countReducer
})
const store = createStore(reducer);
window.store = store;

export default store;