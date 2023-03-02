import { combineReducers } from "redux";

import apiReducer from "./apiReducer";
import fileReducer from "./fileReducer";
import exportReducer from "./exportReducer";
const rootReducer = combineReducers({
  trans: apiReducer,
  file: fileReducer,
  export: exportReducer,
});

export default rootReducer;
