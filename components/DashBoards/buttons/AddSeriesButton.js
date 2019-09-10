import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Colors from "../../../constants/Colors";
import dbService from "../../../services/dbService";
import excerciseService from "../../../services/trainingService";

const AddSeriesButton = (props) => {
  const addSeriesHandler = () => {
    const { currentExcercise, currentExcerciseDay } = props.reducerCompass;
    const excercise = { ...dbService.getExcerciseById(currentExcercise.id) };
    const index = excercise.history.findIndex(
      (exc) => exc.id === currentExcerciseDay.id
    );
    const numberOfSeries = excercise.history[index].series.length;
    const newSeries = {
      number: numberOfSeries + 1,
      repeats: "--",
      weight: "--"
    };
    excercise.history[index].series.push(newSeries);
    excerciseService.saveExcerciseDay(excercise);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text} onPress={addSeriesHandler}>
        ++
      </Text>
    </TouchableOpacity>
  );
};

export default connect((state) => state)(AddSeriesButton);

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: "30%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.rgbaLimeStrong,
    justifyContent: "center"
  },
  text: {
    color: "white",
    textAlign: "center"
  }
});
