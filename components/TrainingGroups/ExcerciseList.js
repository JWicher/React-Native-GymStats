import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import dbService from "../../services/dbService";
import ListOfItems from "./ListOfItems";
import ExcerciseListHeader from "./ExcerciseListHeader";
import Colors from "../../constants/Colors";
import { connect } from "react-redux";
import {
  changeTrainingGroup,
  currentTrainingGroupPart,
  changeExcercise,
  changeSeries
} from "../../redux/actions/actionsCompass";

const ExcerciseList = (props) => {
  const {
    currentTrainingGroup,
    currentTrainingGroupPart,
    currentExcercise
  } = props.reducerCompass;

  const trainingGroupParts = dbService.getTrainingGroupPartsByGroupId(
    currentTrainingGroup.id
  );
  const excercises = dbService.getExcercisesByTrainingGroupPart(
    currentTrainingGroupPart.id
  );

  const changeGroupHandler = (selectedGroup) => {
    props.changeExcercise({ id: "", name: "" });
    props.currentTrainingGroupPart(selectedGroup);
    props.changeSeries({ number: "", valueName: "" });
  };
  const changeExcerciseHandler = (selectedExcercise) => {
    props.changeExcercise(selectedExcercise);
    props.changeSeries({ number: "", valueName: "" });
  };

  return (
    <View style={styles.container}>
      <ExcerciseListHeader />
      <View style={styles.listsContainer}>
        <View style={styles.excerciseGroup}>
          <ScrollView>
            <ListOfItems
              data={trainingGroupParts}
              currentSelected={currentTrainingGroupPart.id}
              onItemPressHandler={changeGroupHandler}
            />
          </ScrollView>
        </View>
        <View style={styles.excercisesList}>
          <ScrollView>
            <ListOfItems
              data={excercises}
              currentSelected={currentExcercise.id}
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
    changeTrainingGroup: (group) => dispatch(changeTrainingGroup(group)),
    currentTrainingGroupPart: (groupPart) =>
      dispatch(currentTrainingGroupPart(groupPart)),
    changeExcercise: (selectedSeries) =>
      dispatch(changeExcercise(selectedSeries)),
    changeSeries: (selectedSeries) => dispatch(changeSeries(selectedSeries))
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
