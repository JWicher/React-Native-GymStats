import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const Card = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressHandler}>
      <View style={{ ...styles.card, ...props.styles }}>{props.children}</View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    maxWidth: "80%",
    width: 300,
    height: 150,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 5,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.rgbaLimeStrong
  }
});
