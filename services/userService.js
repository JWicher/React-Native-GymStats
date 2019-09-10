import { AsyncStorage } from "react-native";
import dbConstants from "./Constants";

export function getCurrentUser() {
  return getAllUsers()[0] ? getAllUsers()[0] : {};
}
export function getAllUsers() {
  let users = AsyncStorage.getItem(dbConstants.users);
  return JSON.parse(users);
}
export function getUserById(id) {
  const allUsers = getAllUsers();
  const index = allUsers.findIndex((training) => training.id === id);
  return allUsers[index];
}

export default {
  getCurrentUser,
  getUserById,
  getAllUsers
};
