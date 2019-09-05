import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import dbService from "../../services/dbService";
import ListOfItems from "./ListOfItems";
import ExcerciseListHeader from "./ExcerciseListHeader";
import Colors from "../../constants/Colors";

const ExcerciseList = (props) => {
  const trainingDayParts = dbService.getTrainingDayPartsByGroupId(
    props.groupId
  );
  const excercises = dbService.getExcercisesByTrainingDayPartId(
    selectedTrPartId
  );

  const [selectedTrPartId, setSelectedTrPartId] = useState(
    trainingDayParts[0].id
  );
  const [selectedExcerciseId, setSelectedExcerciseId] = useState("");

  const changeGroupHandler = (groupId) => {
    setSelectedTrPartId(groupId);
  };
  const changeExcerciseHandler = (excerciseId) => {
    setSelectedExcerciseId(excerciseId);
  };

  return (
    <View style={styles.container}>
      <ExcerciseListHeader />
      <View style={styles.listsContainer}>
        <View style={styles.excerciseGroup}>
          <ScrollView>
            <ListOfItems
              data={trainingDayParts}
              currentSelected={selectedTrPartId}
              onItemPressHandler={changeGroupHandler}
            />
          </ScrollView>
        </View>
        <View style={styles.excercisesList}>
          <ScrollView>
            <ListOfItems
              data={excercises}
              currentSelected={selectedExcerciseId}
              onItemPressHandler={changeExcerciseHandler}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ExcerciseList;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    borderBottomWidth: 1
  },
  listsContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignContent: "space-around"
  },
  excerciseGroup: {
    width: "30%",
    height: "100%",
    backgroundColor: Colors.grey,
    borderRightWidth: 1
  },
  excercisesList: {
    flex: 1,
    backgroundColor: Colors.grey
  }
});
