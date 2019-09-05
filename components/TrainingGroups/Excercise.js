import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Excercise = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.excerciseNane}</Text>
    </View>
  );
};

export default Excercise;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    height: 40,
    justifyContent: "center"
  }
});
