import db_data from "../database/db";
import { AsyncStorage } from "react-native";
import dbConstants from "./Constants";
const db = db_data;
// populateDbToAsyncStorage();

function populateDbToAsyncStorage() {
  const strUsers = JSON.stringify(getUsers());
  const strTrainings = JSON.stringify(getTrainings());
  const strTrGroup = JSON.stringify(getTrainingGroups());
  const strTrGroupParts = JSON.stringify(getTrainingGroupParts());
  const strExcercises = JSON.stringify(getExcercises());
  AsyncStorage.setItem(dbConstants.users, strUsers);
  AsyncStorage.setItem(dbConstants.trainings, strTrainings);
  AsyncStorage.setItem(dbConstants.training_groups, strTrGroup);
  AsyncStorage.setItem(dbConstants.training_group_parts, strTrGroupParts);
  AsyncStorage.setItem(dbConstants.excercises, strExcercises);
  console.log("populate db");
}

export function getUsers() {
  return db.users;
}
export function getUserById(id) {
  return db.users.filter((user) => user.id === id);
}
function getTrainings() {
  return db.trainings;
}
function getTrainingById(trainingId) {
  return db.trainings.filter((t) => t.id === trainingId)[0];
}
function getTrainingGroups() {
  return db.training_groups;
}
function getTrainingGroupsByTrainingId(trId) {
  return db.training_groups.filter((group) => group.trainingId === trId);
}
function getTrainingGroupById(groupId) {
  return db.training_groups.filter((g) => g.id === groupId)[0];
}
function getTrainingGroupByTrainingId(id) {
  return db.training_groups.filter((group) => group.trainingId === id);
}
function getTrainingGroupParts() {
  return db.training_group_parts;
}
function getTrainingDayPartById(trainingPartId) {
  return db.training_group_parts.filter((t) => t.id === trainingPartId)[0];
}
function getTrainingGroupPartsByGroupId(groupId) {
  return db.training_group_parts.filter((t) => t.trainingGroupId === groupId);
}
function getExcercises() {
  return db.excercises;
}
function getExcerciseById(excerciseId) {
  return db.excercises.filter((e) => e.id === excerciseId)[0];
}
function getExcercisesByTrainingGroupPart(partId) {
  return db.excercises.filter((e) => e.training_group_part_id === partId);
}

export default {
  getUsers,
  getUserById,
  getTrainings,
  getTrainingGroups,
  getTrainingGroupsByTrainingId,
  getTrainingGroupParts,
  getExcercises,
  getTrainingById,
  getTrainingGroupById,
  getTrainingDayPartById,
  getExcerciseById,

  getTrainingGroupByTrainingId,
  getExcercisesByTrainingGroupPart,
  getTrainingGroupPartsByGroupId
};
