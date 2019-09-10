import {
  CHANGE_TRAINING,
  CHANGE_TRAINING_GROUP,
  CHANGE_TRAINING_GROUP_PART,
  CHANGE_EXCERCISE,
  CHANGE_EXCERCISE_DAY,
  CHANGE_SERIES
} from "../constants/actionTypes";

const reducerCompass = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_TRAINING: {
      return { ...state, currentTraining: action.currentTraining };
    }
    case CHANGE_TRAINING_GROUP: {
      return { ...state, currentTrainingGroup: action.currentTrainingGroup };
    }
    case CHANGE_TRAINING_GROUP_PART: {
      return {
        ...state,
        currentTrainingGroupPart: action.currentTrainingGroupPart
      };
    }
    case CHANGE_EXCERCISE: {
      return { ...state, currentExcercise: action.currentExcercise };
    }
    case CHANGE_EXCERCISE_DAY: {
      return { ...state, currentExcerciseDay: action.currentExcerciseDay };
    }

    case CHANGE_SERIES: {
      return {
        ...state,
        currentSeries: action.currentSeries
      };
    }

    // no default
  }

  return state;
};

export default reducerCompass;
