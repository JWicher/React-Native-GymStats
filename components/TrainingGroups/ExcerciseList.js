import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import dbService from "../../services/dbService";
import ListOfItems from "./ListOfItems";
import ExcerciseListHeader from "./ExcerciseListHeader";
import Colors from "../../constants/Colors";
import { connect } from "react-redux";
import { changeSelectedPointId } from "../../redux/actions/actionsStatistic";
import { changeSelectedSeriesValue } from "../../redux/actions/actionsDashboard";

const ExcerciseList = (props) => {
  const trainingDayParts = dbService.getTrainingDayPartsByGroupId(
    props.groupId
  );
  const [selectedTrPartId, setSelectedTrPartId] = useState(
    trainingDayParts[0].id
  );
  const excercises = dbService.getExcercisesByTrainingDayPartId(
    selectedTrPartId
  );

  const [selectedExcerciseId, setSelectedExcerciseId] = useState("");

  const changeGroupHandler = (groupId) => {
    setSelectedTrPartId(groupId);
    setSelectedExcerciseId("");
    props.changeSelectedPointId({ id: groupId, type: "part" });
    props.changeSelectedSeriesValue({ number: "", valueName: "" });
  };
  const changeExcerciseHandler = (excerciseId) => {
    setSelectedExcerciseId(excerciseId);
    props.changeSelectedPointId({ id: excerciseId, type: "excercise" });
    props.changeSelectedSeriesValue({ number: "", valueName: "" });
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedPointId: (excercise) =>
      dispatch(changeSelectedPointId(excercise)),
    changeSelectedSeriesValue: (selectedSeriesValue) =>
      dispatch(changeSelectedSeriesValue(selectedSeriesValue))
  };
};

export default connect(
  (state) => state,
  mapDispatchToProps
)(ExcerciseList);

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
