import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ColumnCurrentResDetails from "./ColumnCurrentResDetails";
import { connect } from "react-redux";
import { changeExcerciseDay } from "../../redux/actions/actionsCompass";
import Colors from "../../constants/Colors";
import AddSeriesButton from "./buttons/AddSeriesButton";

const ColumnsCurrentResults = (props) => {
  const [data, setData] = useState(props.results);
  // przesunać gdzies ta funkcje ponzej aby zarejestrowac dzien treningu dla dageo cwicenia
  useEffect(() => {
    props.changeExcerciseDay({
      id: data.id,
      day: data.day,
      updated: new Date().toISOString()
    });
    setData(props.results);
  }, [props.results.id, props.currentResLength]);

  return (
    <View style={styles.container}>
      <View style={styles.containerColumns}>
        <ColumnCurrentResDetails title="kg" data={data} valueName="weight" />
        <ColumnCurrentResDetails title="rp" data={data} valueName="repeats" />
      </View>

      <AddSeriesButton />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeExcerciseDay: (excerciseDay) =>
      dispatch(changeExcerciseDay(excerciseDay))
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
  }
});
