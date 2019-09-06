import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashBoardBody = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default DashBoardBody;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});
