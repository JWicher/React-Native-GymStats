import {
  CHANGE_SELECTED_SERIES_VALUE,
  CHANGE_EXCERCISE_CURRENT_TRAINING
} from "../constants/actionTypes";

export const changeSelectedSeriesValue = (selectedSeriesValue) => ({
  type: CHANGE_SELECTED_SERIES_VALUE,
  selectedSeriesValue: selectedSeriesValue
});
export const changeExcerciseCurrentTraining = (currentExcerciseDayID) => ({
  type: CHANGE_EXCERCISE_CURRENT_TRAINING,
  currentExcerciseDayID: currentExcerciseDayID
});
