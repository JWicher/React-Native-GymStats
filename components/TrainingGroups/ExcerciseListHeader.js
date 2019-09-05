import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";

const ExcerciseListHeader = (props) => {
  return (
    <LinearGradient
      colors={[Colors.elegantColoDark, Colors.elegantColor]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Text style={styles.text}>Grupa</Text>
      <Text style={styles.text}>Ćwiczenie</Text>
    </LinearGradient>
  );
};

export default ExcerciseListHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  text: { color: "white" }
});
