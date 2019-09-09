import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Column = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...props.textColor }}>{props.title}</Text>
      {props.data.series.map((serie) => (
        <Text key={serie.number} style={{ ...styles.text, ...props.textColor }}>
          {serie[props.valueName]}
        </Text>
      ))}
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    alignItems: "center",
    height: "100%"
  },
  text: {
    color: "white",
    fontSize: 18,
    height: 30
  }
});
