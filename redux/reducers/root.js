import { combineReducers } from "redux";
import reducerStatistics from "./reducerStatistics";
import reducerDashboard from "./reducerDashboard";
import reducerCompass from "./reducerCompass";

const rootReducer = combineReducers({
  reducerStatistics,
  reducerDashboard,
  reducerCompass
});

export default rootReducer;
