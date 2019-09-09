import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import dbService from "../../services/dbService";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardBody from "./DashBoardBody";
import ExcerciseButtons from "./ExcerciseButtons";
import { connect } from "react-redux";

class DashBoardExcercise extends Component {
  constructor(props) {
    super();
    this.state = {
      // excerciseFromDB: dbService.getExcerciseById(props.excerciseId)
      currentExcercise: dbService.getExcerciseById(props.excerciseId)
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.excerciseId !== state.currentExcercise.id) {
      return {
        currentExcercise: dbService.getExcerciseById(props.excerciseId)
      };
    }
    return null;
  }

  addSeriesHandler = () => {
    const { currentExcerciseDayID: cEDId } = this.props.reducerDashboard;
    const { currentExcercise } = { ...this.state };
    const index = currentExcercise.history.findIndex((eTD) => eTD.id === cEDId);
    const numberOfSeries = currentExcercise.history[index].series.length;
    const newSeries = {
      number: numberOfSeries + 1,
      repeats: "--",
      weight: "--"
    };
    currentExcercise.history[index].series.push(newSeries);
    this.setState(currentExcercise);
  };

  addNewExcerciseTrainingHandler = () => {
    const { currentExcercise } = { ...this.state };
    const today = new Date();

    const newTrainingDay = {
      id: today.getTime(),
      day: today.toISOString().substr(0, 10),
      series: [
        {
          number: 1,
          repeats: 0,
          weight: 0
        }
      ]
    };
    currentExcercise.history.push(newTrainingDay);
    this.setState(currentExcercise);
  };

  render() {
    return (
      <View style={styles.containerMain}>
        <DashBoardHeader />
        <DashBoardBody excercise={this.state.currentExcercise} />
        <ExcerciseButtons
          onAddNewSieres={this.addSeriesHandler}
          onAddnewTraininDay={this.addNewExcerciseTrainingHandler}
        />
      </View>
    );
  }
}

export default connect((state) => state)(DashBoardExcercise);

const styles = StyleSheet.create({
  containerMain: {
    width: "100%",
    flex: 1
  }
});
