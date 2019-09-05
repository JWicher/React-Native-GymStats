import db_data from "../database/db";

const db = db_data;

function getUserData() {
  return db;
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
function getTrainingGroupById(groupId) {
  return db.training_groups.filter((g) => g.id === groupId)[0];
}
function getTrainingGroupByTrainingId(id) {
  return db.training_groups.filter((group) => group.trainingId === id);
}
function getTrainingDayParts() {
  return db.training_day_parts;
}
function getTrainingDayPartById(trainingPartId) {
  return db.training_day_parts.filter((t) => t.id === trainingPartId)[0];
}
function getTrainingDayPartsByGroupId(groupId) {
  return db.training_day_parts.filter((t) => t.trainingGroupId === groupId);
}
function getExcercises() {
  return db.excercises;
}
function getExcerciseById(excerciseId) {
  return db.excercises.filter((e) => e.id === excerciseId)[0];
}
function getExcercisesByTrainingDayPartId(partId) {
  return db.excercises.filter((e) => e.training_day_part_id === partId);
}

export default {
  getUserData,
  getTrainings,
  getTrainingGroups,
  getTrainingDayParts,
  getExcercises,
  getTrainingById,
  getTrainingGroupById,
  getTrainingDayPartById,
  getExcerciseById,

  getTrainingGroupByTrainingId,
  getExcercisesByTrainingDayPartId,
  getTrainingDayPartsByGroupId
};
