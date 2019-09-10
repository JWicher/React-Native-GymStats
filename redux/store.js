import { createStore } from "redux";
import rootReducer from "./reducers/root";

const initialState = {
  reducerStatistics: {
    currentSelectePoint: { id: "", type: "" }
  },
  // reducerStore: {
  //   state: {
  //     users: [],
  //     trainings: [],
  //     training_groups: [],
  //     training_group_parts: [],
  //     excercises: []
  //   }
  // },
  reducerCompass: {
    currentTraining: { id: "87746334", name: "Trening siłowy", updated: "" },
    currentTrainingGroup: {
      id: "3219832184",
      name: "Klatka i barki",
      updated: ""
    },
    currentTrainingGroupPart: { id: "23543", name: "Klatka", updated: "" },
    currentExcercise: { id: "", name: "", updated: "" },
    currentExcerciseDay: { id: "", day: "", updated: "" },
    currentSeries: { number: "", valueName: "", updated: "" }
  }
};

export const store = createStore(rootReducer, initialState);
// window.store = store;
