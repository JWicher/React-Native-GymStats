import { createStore } from "redux";
import rootReducer from "./reducers/root";

const initialState = {
  reducerStatistics: {
    currentSelectePoint: { id: "", type: "" }
  },
  reducerDashboard: {
    selectedSeriesValue: { number: "", valueName: "" },
    currentExcerciseDayID: ""
  }
};

export const store = createStore(rootReducer, initialState);
// window.store = store;
