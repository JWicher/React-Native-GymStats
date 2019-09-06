import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Colors from "../../constants/Colors";
import dbService from "../../services/dbService";
import ColumnWithResults from "./ColumnWithResults";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardBody from "./DashBoardBody";

const DashBoardExcercise = (props) => {
  const excercise = { ...dbService.getExcerciseById(props.excerciseId) };
  const [currentExcercise, updateCurrentExcercise] = useState(excercise);
  const [currentResults, setCurrentResults] = useState(getResutls("current"));
  const [lastResults, setLastResults] = useState(getResutls("latest"));
  const [selectedPointToModify, setSelectedPointToModify] = useState("");

  const startNewTraining = () => {
    const historyWithTraining = [
      ...currentExcercise.history,
      createNewHistoryObject()
    ];
    updateCurrentExcercise((ct) => ({ ...ct, history: historyWithTraining }));
    setCurrentResults(getResutls("current"));
    setLastResults(getResutls("latest"));
  };
  const addNewSerie = () => {
    const cr = { ...currentResults };

    const newSerie = {
      number: cr.series.length + 1,
      repeats: "--",
      weight: "--"
    };
    cr.series.push(newSerie);

    const index = currentExcercise.history.findIndex(
      (hObj) => hObj.id === cr.id
    );
    currentExcercise.history[index] = cr;
    updateCurrentExcercise(currentExcercise);
    setCurrentResults(cr);

    if (cr.series.length > lastResults.series.length) {
      const ls = { ...lastResults };
      ls.series.push(addFantomSerie(cr.series.length));
      setLastResults(ls);
    }
  };
  function getResutls(position) {
    const num = position === "current" ? 1 : 2;
    const a =
      currentExcercise.history.length >= num
        ? { ...currentExcercise.history[currentExcercise.history.length - num] }
        : createFantomHistoryObject();
    console.log("lh", a);
    return a;
  }
  function createNewHistoryObject() {
    const today = new Date();

    return {
      id: today.getTime(),
      day: today.toISOString().substr(0, 10),
      series: []
    };
  }
  function createFantomHistoryObject() {
    const today = new Date();

    return {
      id: today.getTime(),
      day: "--",
      series: [{ number: 1, repeats: "--", weight: "--" }]
    };
  }
  function addFantomSerie(length) {
    return { number: length, repeats: "--", weight: "--" };
  }

  const onSelecPointToModifyHandler = (selectedPoint) => {
    setSelectedPointToModify(selectedPoint);
  };

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}>
        <DashBoardHeader>
          <View style={styles.column_1}>
            <Text style={styles.header}>Seria</Text>
          </View>
          <View style={styles.column_2}>
            <Text style={{ ...styles.header, ...styles.headerLastTime }}>
              Ostatnio
            </Text>
          </View>

          <View style={styles.column_3}>
            <Text style={styles.header}>Teraz</Text>
          </View>
        </DashBoardHeader>
      </View>

      <ScrollView>
        <DashBoardBody>
          <View style={styles.column_1}>
            <ColumnWithResults
              header=""
              data={lastResults.series}
              valueName="number"
            />
          </View>

          <View style={styles.column_2}>
            <View style={styles.column_results}>
              <ColumnWithResults
                header="kg"
                data={lastResults.series}
                valueName="weight"
                textColor={{ color: Colors.rgbaLimeStrong }}
              />
              <ColumnWithResults
                header="rp"
                data={lastResults.series}
                valueName="repeats"
                textColor={{ color: Colors.rgbaLimeStrong }}
              />
            </View>
          </View>
          <View style={styles.column_3}>
            <View style={styles.column_results}>
              <ColumnWithResults
                header="kg"
                currentTraining={true}
                data={currentResults.series}
                valueName="weight"
                textColor={{ color: Colors.white }}
                selected={selectedPointToModify}
                onSelecPointToModify={onSelecPointToModifyHandler}
              />
              <ColumnWithResults
                header="rp"
                currentTraining={true}
                data={currentResults.series}
                valueName="repeats"
                textColor={{ color: Colors.white }}
                selected={selectedPointToModify}
                onSelecPointToModify={onSelecPointToModifyHandler}
              />
            </View>
          </View>
        </DashBoardBody>
      </ScrollView>

      {selectedPointToModify === "" && (
        <View style={styles.buttons}>
          <Button title="dzień" onPress={startNewTraining} />
          <Button title="seria" onPress={addNewSerie} />
        </View>
      )}
    </View>
  );
};

export default DashBoardExcercise;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginTop: 10
  },
  containerHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5
  },
  containerBody: {
    backgroundColor: "yellow",
    height: 150
  },
  flexDiretionRow: {
    flexDirection: "row"
  },
  column_1: {
    width: "30%",
    alignItems: "center"
  },
  column_2: {
    width: "35%",
    alignItems: "center"
  },
  column_3: {
    width: "35%",
    alignItems: "center"
  },
  column_results: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  header: {
    fontSize: 24,
    color: Colors.white
  },

  headerLastTime: {
    color: Colors.rgbaLimeStrong
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5
  }
});
