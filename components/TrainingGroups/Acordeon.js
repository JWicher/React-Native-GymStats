import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import TrainingGroups from "../TrainingGroups/TrainingGroups";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
import Colors from "../../constants/Colors";
import Excercise from "../TrainingGroups/Excercise";
import dbService from "../../services/dbService";

const Acordeon = (props) => {
  const trainingDayPart = dbService.getTrainingDayPartById(
    props.trainingDayPartID
  );
  const excercises = dbService.getExcercisesByTrainingDayPartId(
    trainingDayPart.id
  );

  return (
    <View style={styles.acordeonContainer}>
      <Collapse style={styles.collapse}>
        <CollapseHeader>
          <TrainingGroups groupName={trainingDayPart.name} />
        </CollapseHeader>
        <CollapseBody>
          <ScrollView style={styles.collapseBody}>
            {excercises.map((excercise) => (
              <Excercise
                key={excercise.id}
                excerciseNane={excercise.name}
              ></Excercise>
            ))}
          </ScrollView>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default Acordeon;

const styles = StyleSheet.create({
  collapse: {
    width: "100%"
  },
  collapseBody: {
    maxHeight: 90,
    height: 90,
    backgroundColor: Colors.grey
  },
  acordeonContainer: {
    width: "100%",
    maxHeight: 130
  }
});
