import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { changeSelectedSeriesValue } from "../../redux/actions/actionsDashboard";

const ColumnCurrentResDetails = (props) => {
  const selectingSeriesValueHandler = (selectedSeriesValue) => {
    props.changeSelectedSeriesValue(selectedSeriesValue);
  };

  const getStyle = (seriesPoint) => {
    const selectedPoint = props.reducerDashboard.selectedSeriesValue;
    const textStyle = {
      color: "white",
      textAlign: "center",
      textAlignVertical: "center",
      fontSize: 18,
      height: 30
    };
    if (
      seriesPoint.number === selectedPoint.number &&
      props.valueName === selectedPoint.valueName
    ) {
      textStyle.borderWidth = 1;
      textStyle.borderColor = "white";
      textStyle.width = 40;
      textStyle.maxWidth = 40;
      textStyle.borderRadius = 10;
    }

    return textStyle;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.data.series.map((series) => (
        <Text
          key={series.number}
          style={getStyle(series)}
          onPress={() =>
            selectingSeriesValueHandler({
              number: series.number,
              valueName: props.valueName
            })
          }
        >
          {series[props.valueName]}
        </Text>
      ))}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedSeriesValue: (selectedSeriesValue) =>
      dispatch(changeSelectedSeriesValue(selectedSeriesValue))
  };
};

export default connect(
  (state) => state,
  mapDispatchToProps
)(ColumnCurrentResDetails);

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "100%",
    alignItems: "center"
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    height: 30,
    textAlignVertical: "center"
  }
});
