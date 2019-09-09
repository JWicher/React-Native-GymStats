import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const ButtonsGroup = () => {
  return (
    <View style={styles.container}>
      <CustomButton title="20" color={{ backgroundColor: "red" }} />
      <CustomButton title="10" color={{ backgroundColor: "green" }} />
      <CustomButton title="5" color={{ backgroundColor: "blue" }} />
      <CustomButton title="2,5" color={{ backgroundColor: "yellow" }} />
      <CustomButton title="1,25" color={{ backgroundColor: "orange" }} />
      <CustomButton title="0,5" color={{ backgroundColor: "blue" }} />
    </View>
  );
};

export default ButtonsGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
