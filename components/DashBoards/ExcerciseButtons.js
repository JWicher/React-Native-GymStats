import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ButtonsGroup from "./buttons/ButtonsGroup";

const ExcerciseButtons = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonForTraining}>
        <Button
          title="nowy trening"
          onPress={props.onAddnewTraininDay}
        ></Button>
        <Button title="+ seria" onPress={props.onAddNewSieres}></Button>
      </View>
      <View style={styles.buttonForValuesBox}>
        <ButtonsGroup />
        <ButtonsGroup />
      </View>
    </View>
  );
};

export default ExcerciseButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row"
  },
  buttonForTraining: {
    width: "20%",
    maxWidth: "20%"
  },
  buttonForValuesBox: {
    flex: 1,
    alignItems: "center"
  }
});
