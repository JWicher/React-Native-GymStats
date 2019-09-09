import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ExcerciseButtons = (props) => {
  return (
    <View style={styles.container}>
      <Button title="+ seria" onPress={props.onAddNewSieres}></Button>
      <Button title="nowy trening"></Button>
    </View>
  );
};

export default ExcerciseButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 30
  }
});
