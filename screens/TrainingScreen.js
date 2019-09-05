import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import StatsTable from "../components/Stats_table";
import dbService from "../services/dbService";
import ExcerciseList from "../components/TrainingGroups/ExcerciseList";
import DashBoardExcercise from "../components/DashBoards/DashBoardExcercise";

const TrainingScreen = () => {
  const user = dbService.getUserData();
  const training = user.trainings[0];

  const trainingGroups = dbService.getTrainingGroupByTrainingId(training.id);
  const trainingGroup = trainingGroups[0];

  return (
    <Screen>
      <Header title={training.name} menu={true} />
      <StatsTable training={training} />
      <View style={styles.trainingDayParts}>
        <ExcerciseList groupId={trainingGroup.id} />
      </View>
      <DashBoardExcercise />
    </Screen>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  trainingDayParts: {
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    height: 200,
    maxHeight: 200,
    overflow: "hidden"
  }
});
