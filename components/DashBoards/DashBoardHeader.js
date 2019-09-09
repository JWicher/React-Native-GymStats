import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DashBoardHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSeries}>
        <Text style={styles.text}>Seria</Text>
      </View>
      <View style={styles.headerResults}>
        <Text style={styles.text}>Ostatnio</Text>
      </View>
      <View style={styles.headerResults}>
        <Text style={styles.text}>Teraz</Text>
      </View>
    </View>
  );
};

export default DashBoardHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignContent: "space-between"
  },
  headerSeries: {
    width: "25%",
    maxWidth: "25%",
    alignItems: "center"
  },
  headerResults: {
    width: "35%",
    maxWidth: "35%",
    alignItems: "center"
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 24
  }
});
