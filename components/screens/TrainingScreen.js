import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../Screen";
import Header from "../Header";
import StatsTable from "../Stats_table";
import dbService from "../../services/dbService";
import ExcerciseList from "../TrainingGroups/ExcerciseList";
import DashBoardExcercise from "../DashBoards/DashBoardExcercise";
import { connect } from "react-redux";

const TrainingScreen = (props) => {
  const user = dbService.getUserData();
  const training = user.trainings[0];

  const trainingGroups = dbService.getTrainingGroupByTrainingId(training.id);
  const trainingGroup = trainingGroups[0];
  const selectedExcercise = props.reducerStatistics.currentSelectePoint;

  return (
    <Screen>
      <Header title={training.name} menu={true} />
      <StatsTable training={training} />
      <View style={styles.trainingDayParts}>
        <ExcerciseList groupId={trainingGroup.id} />
      </View>
      {selectedExcercise.type === "excercise" && (
        <DashBoardExcercise excerciseId={selectedExcercise.id} />
      )}
    </Screen>
  );
};

export default connect((state) => state)(TrainingScreen);

const styles = StyleSheet.create({
  trainingDayParts: {
    width: "100%",
    height: 200,
    maxHeight: 200,
    overflow: "hidden"
  }
});
