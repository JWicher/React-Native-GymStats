import {
  CHANGE_TRAINING,
  CHANGE_TRAINING_GROUP,
  CHANGE_TRAINING_GROUP_PART,
  CHANGE_EXCERCISE,
  CHANGE_EXCERCISE_DAY,
  CHANGE_SERIES
} from "../constants/actionTypes";

export const changeTraining = (training) => ({
  type: CHANGE_TRAINING,
  currentTraining: training
});
export const changeTrainingGroup = (trainingGroup) => ({
  type: CHANGE_TRAINING_GROUP,
  currentTrainingGroup: trainingGroup
});
export const currentTrainingGroupPart = (trainingGroupPart) => ({
  type: CHANGE_TRAINING_GROUP_PART,
  currentTrainingGroupPart: trainingGroupPart
});
export const changeExcercise = (excercise) => ({
  type: CHANGE_EXCERCISE,
  currentExcercise: excercise
});
export const changeExcerciseDay = (excerciseDay) => ({
  type: CHANGE_EXCERCISE_DAY,
  currentExcerciseDay: excerciseDay
});
export const changeSeries = (series) => ({
  type: CHANGE_SERIES,
  currentSeries: series
});
