import { combineReducers } from "redux";
import jokes from "./jokesReducer";
import userData from "./userData";

const rootReducer = combineReducers({ jokes, userData });

export default rootReducer;
