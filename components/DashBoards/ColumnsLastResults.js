import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Column from "./Column";
import Colors from "../../constants/Colors";

const ColumnsLastResults = (props) => {
  const [results, setResults] = useState(props.results);

  useEffect(() => {
    setResults(props.results);
  });

  return (
    <View style={styles.container}>
      <Column
        title="kg"
        data={props.results}
        valueName="weight"
        textColor={{ color: Colors.rgbaLimeStrong }}
      />
      <Column
        title="rp"
        data={props.results}
        valueName="repeats"
        textColor={{ color: Colors.rgbaLimeStrong }}
      />
    </View>
  );
};

export default ColumnsLastResults;

const styles = StyleSheet.create({
  container: {
    width: "35%",
    maxWidth: "35%",
    alignItems: "center",
    flexDirection: "row"
  }
});
