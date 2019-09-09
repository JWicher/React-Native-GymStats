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
function getTrainingGroupsByTrainingId(trId) {
  return db.training_groups.filter((group) => group.trainingId === trId);
}
function getTrainingGroupById(groupId) {
  return db.training_groups.filter((g) => g.id === groupId)[0];
}
function getTrainingGroupByTrainingId(id) {
  return db.training_groups.filter((group) => group.trainingId === id);
}
function getTrainingDayParts() {
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
  getUserData,
  getTrainings,
  getTrainingGroupsByTrainingId,
  getTrainingDayParts,
  getExcercises,
  getTrainingById,
  getTrainingGroupById,
  getTrainingDayPartById,
  getExcerciseById,

  getTrainingGroupByTrainingId,
  getExcercisesByTrainingGroupPart,
  getTrainingGroupPartsByGroupId
};
