import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import dbService from "../../services/dbService";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardBody from "./DashBoardBody";
import ExcerciseButtons from "./ExcerciseButtons";
import { connect } from "react-redux";

const DashBoardExcercise = (props) => {
  const excerciseFromDB = dbService.getExcerciseById(props.excerciseId);
  const [currentExcercise, setCurrentExcercise] = useState(excerciseFromDB);

  const addSeriesHandler = () => {
    console.log("ne series");
    const { currentExcerciseDayID: cEDId } = props.reducerDashboard;
    const index = currentExcercise.history.findIndex((eTD) => eTD.id === cEDId);
    const numberOfSeries = currentExcercise.history[index].series.length;
    const newSeries = {
      number: numberOfSeries + 1,
      repeats: "--",
      weight: "--"
    };
    currentExcercise.history[index].series.push(newSeries);
    setCurrentExcercise(currentExcercise);
  };

  useEffect(() => {
    setCurrentExcercise(excerciseFromDB);
  }, [props.excerciseId]);

  console.log("props", currentExcercise.history);

  return (
    <View style={styles.containerMain}>
      <DashBoardHeader />
      <DashBoardBody excercise={currentExcercise} />
      <ExcerciseButtons onAddNewSieres={addSeriesHandler} />
    </View>
  );
};

export default connect((state) => state)(DashBoardExcercise);

const styles = StyleSheet.create({
  containerMain: {
    width: "100%",
    flex: 1
  }
});
