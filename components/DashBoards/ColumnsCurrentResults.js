import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColumnCurrentResDetails from "./ColumnCurrentResDetails";
import { connect } from "react-redux";
import { changeExcerciseCurrentTraining } from "../../redux/actions/actionsDashboard";

const ColumnsCurrentResults = (props) => {
  // przesunać gdzies ta funkcje ponzej aby zarejestrowac dzien treningu dla dageo cwicenia

  useEffect(() => {
    props.changeExcerciseCurrentTraining(props.results.id);
  }, [props.results.id]);
  return (
    <View style={styles.container}>
      <ColumnCurrentResDetails
        title="kg"
        data={props.results}
        valueName="weight"
      />
      <ColumnCurrentResDetails
        title="rp"
        data={props.results}
        valueName="repeats"
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeExcerciseCurrentTraining: (currentTrainingID) =>
      dispatch(changeExcerciseCurrentTraining(currentTrainingID))
  };
};

export default connect(
  (state) => state,
  mapDispatchToProps
)(ColumnsCurrentResults);

const styles = StyleSheet.create({
  container: {
    width: "35%",
    maxWidth: "35%",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    color: "white"
  }
});
