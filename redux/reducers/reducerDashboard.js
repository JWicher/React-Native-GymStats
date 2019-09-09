import {
  CHANGE_SELECTED_SERIES_VALUE,
  CHANGE_EXCERCISE_CURRENT_TRAINING
} from "../constants/actionTypes";

const reducerDashboard = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_SERIES_VALUE: {
      return { ...state, selectedSeriesValue: action.selectedSeriesValue };
    }
    case CHANGE_EXCERCISE_CURRENT_TRAINING: {
      return { ...state, currentExcerciseDayID: action.currentExcerciseDayID };
    }

    // no default
  }

  return state;
};

export default reducerDashboard;
