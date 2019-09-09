import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ColumnCurrentResDetails from "./ColumnCurrentResDetails";
import { connect } from "react-redux";
import { changeExcerciseCurrentTraining } from "../../redux/actions/actionsDashboard";
import Colors from "../../constants/Colors";

const ColumnsCurrentResults = (props) => {
  const [data, setData] = useState(props.results);
  // przesunać gdzies ta funkcje ponzej aby zarejestrowac dzien treningu dla dageo cwicenia
  useEffect(() => {
    props.changeExcerciseCurrentTraining(props.results.id);
    setData(props.results);
  }, [props.results.id, props.currentResLength]);

  return (
    <View style={styles.container}>
      <View style={styles.containerColumns}>
        <ColumnCurrentResDetails title="kg" data={data} valueName="weight" />
        <ColumnCurrentResDetails title="rp" data={data} valueName="repeats" />
      </View>

      <TouchableOpacity style={styles.addSeriesButton}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeExcerciseCurrentTraining: (currentTrainingID) =>
      dispatch(changeExcerciseCurrentTraining(currentTrainingID))
  };
};

export default connect(
  (state) => state,
  mapDispatchToProps
)(ColumnsCurrentResults);

const styles = StyleSheet.create({
  container: {
    width: "35%",
    maxWidth: "35%",
    alignItems: "center"
  },
  containerColumns: {
    width: "100%",
    maxWidth: "100%",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  addSeriesButton: {
    height: 25,
    width: "30%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.rgbaLimeStrong,
    justifyContent: "center"
  }
});
