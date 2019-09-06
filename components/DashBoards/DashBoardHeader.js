import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashBoardHeader = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default DashBoardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});
