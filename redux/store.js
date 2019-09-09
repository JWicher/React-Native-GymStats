import { createStore } from "redux";
import rootReducer from "./reducers/root";

const initialState = {
  reducerStatistics: {
    currentSelectePoint: { id: "", type: "" }
  },
  reducerDashboard: {
    selectedSeriesValue: { number: "", valueName: "" },
    currentExcerciseDayID: ""
  },
  reducerCompass: {
    currentTraining: { id: "87746334", name: "Trening siłowy" },
    currentTrainingGroup: { id: "3219832184", name: "Klatka i barki" },
    currentTrainingGroupPart: { id: "23543", name: "Klatka" },
    currentExcercise: { id: "", name: "" },
    currentExcerciseDay: { id: "", name: "" },
    currentSeries: { number: "", valueName: "" }
  }
};

export const store = createStore(rootReducer, initialState);
// window.store = store;
