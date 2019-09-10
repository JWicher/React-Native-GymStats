import { AsyncStorage } from "react-native";
import dbConstants from "./Constants";

export async function saveExcercise(changedExcercise) {
  let allExcercises = await AsyncStorage.getItem(dbConstants.excercises);
  allExcercises = JSON.parse(allExcercises);
  const index = allExcercises.findIndex((ex) => ex.id === changedExcercise.id);
  allExcercises[index].history = changedExcercise.history;
  AsyncStorage.setItem(dbConstants.excercises, allExcercises);
  console.log("saved");
  console.log(allExcercises);
}

export async function getTrainingById(id) {
  let allTrainings = await AsyncStorage.getItem(dbConstants.trainings);
  allTrainings = JSON.parse(allTrainings);

  const index = allTrainings.findIndex((training) => training.id === id);
  return allTrainings[index];
}
export async function getExcerciseById(id) {
  let allExcercises = await AsyncStorage.getItem(dbConstants.excercises);
  allExcercises = JSON.parse(allExcercises);

  const index = allExcercises.findIndex((excercise) => excercise.id === id);
  return allExcercises[index]
    ? allExcercises[index]
    : { id: "", name: "", updated: "" };
}

export default {
  saveExcercise,
  getTrainingById,
  getExcerciseById
};
