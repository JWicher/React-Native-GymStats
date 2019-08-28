import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Screen = (props) => {
  return <View style={styles.screen}>{props.children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    height: "100%",
    backgroundColor: Colors.elegantColoDark,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
