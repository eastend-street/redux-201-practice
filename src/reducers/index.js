import { combineReducers } from "redux";
import text from "./text";

// combine reducers to make 1 big store
const rootReducer = combineReducers({
  text
});

export default rootReducer;
