import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColumnsSeries from "./ColumnsSeries";
import ColumnsLastResults from "./ColumnsLastResults";
import ColumnsCurrentResults from "./ColumnsCurrentResults";
import { ScrollView } from "react-native-gesture-handler";

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
  }, [excercise.id, props.excercise.history.length]);

  useEffect(() => {
    setBiggestLength(getBiggestArrayLength());
  }, [currentResults.series.length]);

  console.log("lastResults", new Date().getTime());
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.conteinerInner}>
          <ColumnsSeries length={biggestLength} />
          <ColumnsLastResults results={lastResults} length={biggestLength} />
          <ColumnsCurrentResults
            results={currentResults}
            length={biggestLength}
            currentResLength={currentResults.series.length}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashBoardBody;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "57%",
    maxHeight: "57%",
    borderColor: "red",
    borderWidth: 1
  },
  conteinerInner: {
    flexDirection: "row",
    width: "100%",
    height: "100%"
  }
});
