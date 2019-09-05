import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashBoardExcercise = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column_1}></View>
      <View style={styles.column_2}></View>
      <View style={styles.column_3}></View>
    </View>
  );
};

export default DashBoardExcercise;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5
  },
  column_1: {
    width: "20%",
    backgroundColor: "blue"
  },
  column_2: {
    width: "39%",
    backgroundColor: "red"
  },
  column_3: {
    width: "39%",
    backgroundColor: "grey"
  }
});
