import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ColumnsSeries = (props) => {
  const [seriesNumber, setSeriesNumber] = useState(getSeriesArray());

  function getSeriesArray() {
    let series = [];
    for (let i = 1; i <= props.length; i++) {
      series.push(i);
    }
    return series;
  }
  useEffect(() => {
    setSeriesNumber(getSeriesArray());
  }, [props.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      {seriesNumber.map((number) => (
        <Text key={number} style={styles.text}>
          {number}
        </Text>
      ))}
    </View>
  );
};

export default ColumnsSeries;

const styles = StyleSheet.create({
  container: {
    width: "25%",
    maxWidth: "25%",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 18,
    height: 30
  }
});
