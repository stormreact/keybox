import { combineReducers } from "redux";
import { checkbox } from "./checkbox";
import { keys } from "./key";

export const getStateKey = state => {
  return state.checkbox;
}

const rootReducer = combineReducers({
  checkbox,
  keys
});

export default rootReducer;
