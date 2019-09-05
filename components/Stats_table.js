import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Col from "./table/Col";

const StatsTable = ({ training }) => {
  const {
    total_weight,
    total_repeats,
    total_time,
    total_series_qty,
    average_weight,
    average_repeats,
    average_time,
    average_series_qty
  } = training.training_stats;

  const row_labels = {
    title: "",
    values: [
      { value: "Obciążenie", unit: "", key: 1 },
      { value: "Łączny czas", unit: "", key: 2 },
      { value: "Ilość serii", unit: "", key: 3 },
      { value: "Powtórzenia", unit: "", key: 4 }
    ]
  };
  const row_total = {
    title: "Suma",
    values: [
      { value: total_weight, unit: "kg", key: 1 },
      { value: total_time, unit: "h", key: 2 },
      { value: total_series_qty, unit: "", key: 3 },
      { value: total_repeats, unit: "", key: 4 }
    ]
  };
  const row_average = {
    title: "Średnia",
    values: [
      { value: average_weight, unit: "kg", key: 1 },
      { value: average_time, unit: "h", key: 2 },
      { value: average_series_qty, unit: "", key: 3 },
      { value: average_repeats, unit: "", key: 4 }
    ]
  };

  return (
    <View style={styles.container}>
      <Col
        data={row_labels}
        containerStyles={{ width: "35%" }}
        textStyles={{ textAlign: "left" }}
      />
      <Col data={row_total} />
      <Col data={row_average} />
    </View>
  );
};

export default StatsTable;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 5,
    paddingVertical: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  }
});
