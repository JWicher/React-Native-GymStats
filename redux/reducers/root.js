import { combineReducers } from "redux";
import reducerStatistics from "./reducerStatistics";
import reducerDashboard from "./reducerDashboard";

const rootReducer = combineReducers({
  reducerStatistics,
  reducerDashboard
});

export default rootReducer;
