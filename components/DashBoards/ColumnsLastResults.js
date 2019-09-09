import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Column from "./Column";
import Colors from "../../constants/Colors";

const ColumnsLastResults = (props) => {
  const [data, setData] = useState(props.results.series);

  const fillDataWithEmptyObjects = () => {
    let arr = [...props.results.series];
    for (let i = arr.length; i < props.length; i++) {
      arr.push({ number: i + 1, repeats: "--", weight: "--" });
    }
    setData(arr);
  };
  useEffect(() => {
    fillDataWithEmptyObjects();
  }, [props.results.id, props.length]);

  return (
    <View style={styles.container}>
      <Column
        title="kg"
        data={data}
        valueName="weight"
        textColor={{ color: Colors.rgbaLimeStrong }}
      />
      <Column
        title="rp"
        data={data}
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
