import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardBody from "./DashBoardBody";
import ExcerciseButtons from "./ExcerciseButtons";
import { connect } from "react-redux";

class DashBoardExcercises extends Component {
  constructor(props) {
    super();
    this.state = {
      // excerciseFromDB: dbService.getExcerciseById(props.excerciseId)
      excercise: props.excercise
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.excercise.id !== state.excercise.id) {
      return {
        excercise: props.excercise
      };
    }
    return null;
  }

  // addSeriesHandler = () => {
  //   const { currentExcerciseDayID: cEDId } = this.props.reducerDashboard;
  //   const { currentExcercise } = { ...this.state };
  //   const index = currentExcercise.history.findIndex((eTD) => eTD.id === cEDId);
  //   const numberOfSeries = currentExcercise.history[index].series.length;
  //   const newSeries = {
  //     number: numberOfSeries + 1,
  //     repeats: "--",
  //     weight: "--"
  //   };
  //   currentExcercise.history[index].series.push(newSeries);
  //   this.setState(currentExcercise);
  // };

  addNewExcerciseTrainingHandler = () => {
    const { excercise } = { ...this.state };
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
    excercise.history.push(newTrainingDay);
    this.setState(excercise);
  };

  render() {
    return (
      <View style={styles.containerMain}>
        <DashBoardHeader />
        <DashBoardBody excercise={this.state.excercise} />
        <ExcerciseButtons
          onAddNewSieres={() => console.log("sss")}
          onAddnewTraininDay={this.showAsnycStorage}
        />
      </View>
    );
  }
}

export default connect((state) => state)(DashBoardExcercises);

const styles = StyleSheet.create({
  containerMain: {
    width: "100%",
    flex: 1
  }
});
