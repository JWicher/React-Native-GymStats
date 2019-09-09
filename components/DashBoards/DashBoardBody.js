import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColumnsSeries from "./ColumnsSeries";
import ColumnsLastResults from "./ColumnsLastResults";
import ColumnsCurrentResults from "./ColumnsCurrentResults";

const DashBoardBody = (props) => {
  const [excercise, setExcercise] = useState(props.excercise);
  const [lastResults, setLastResults] = useState(getResults("last"));
  const [currentResults, setCurrentResults] = useState(getResults("current"));
  const [biggestLength, setBiggestLength] = useState(1);

  function getResults(name) {
    const length = excercise.history.length;
    const num = name === "current" ? 1 : 2;
    return excercise.history[length - num]
      ? excercise.history[length - num]
      : getFantomHistoryObject();
  }

  function getFantomHistoryObject() {
    return {
      id: 1,
      day: "--",
      name: "--",

      series: [
        {
          number: 1,
          repeats: "--",
          weight: "--"
        }
      ]
    };
  }
  function getBiggestArrayLength() {
    return currentResults.series.length > lastResults.series.length
      ? currentResults.series.length
      : lastResults.series.length;
  }
  useEffect(() => {
    setExcercise(props.excercise);
  }, [props.excercise.id]);

  useEffect(() => {
    setLastResults(getResults("last"));
    setCurrentResults(getResults("current"));
  }, [excercise.id]);

  useEffect(() => {
    setBiggestLength(getBiggestArrayLength());
  }, [currentResults.series.length]);

  return (
    <View style={styles.container}>
      <ColumnsSeries length={biggestLength} />
      <ColumnsLastResults results={lastResults} />
      <ColumnsCurrentResults results={currentResults} />
    </View>
  );
};

export default DashBoardBody;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "70%",
    maxHeight: "70%",
    borderColor: "red",
    borderWidth: 1
  }
});
