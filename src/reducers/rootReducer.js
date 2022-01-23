import { combineReducers } from "redux";
import jokes from "./jokesReducer";
import userData from "./userData";

const rootReducer = combineReducers({ jokes: jokes, userData: userData });

export default rootReducer;
