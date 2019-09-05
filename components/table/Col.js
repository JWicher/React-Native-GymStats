import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Col = (props) => {
  return (
    <View style={{ ...styles.container, ...props.containerStyles }}>
      <Text style={styles.title}>{props.data.title}</Text>
      {props.data.values.map((d) => (
        <Text key={d.key} style={{ ...styles.text, ...props.textStyles }}>
          {`${d.value} ${d.unit}`}
        </Text>
      ))}
    </View>
  );
};

export default Col;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: 100,
    paddingHorizontal: 3,
    textAlign: "center"
  },
  title: {
    color: "white",
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  text: { color: "white", textAlign: "center" }
});
