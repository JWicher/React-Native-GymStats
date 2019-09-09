import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={{ ...styles.container, ...props.color }}>
      <TouchableOpacity>
        <Text style={styles.text}>{props.title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    alignItems: "stretch",
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    width: 50
  },
  text: {}
});
