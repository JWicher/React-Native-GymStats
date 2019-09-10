import { combineReducers } from "redux";
import reducerStatistics from "./reducerStatistics";
import reducerCompass from "./reducerCompass";
// import reducerInitialState from "./reducerInitialState";

const rootReducer = combineReducers({
  reducerStatistics,
  reducerCompass
  // reducerInitialState,
});

export default rootReducer;
