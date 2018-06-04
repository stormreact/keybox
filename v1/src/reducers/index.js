import { combineReducers } from "redux";
import { checkbox } from "./checkbox";

export const getStateKey = state => {
  return state.checkbox;
}

const rootReducer = combineReducers({
  checkbox
});

export default rootReducer;
