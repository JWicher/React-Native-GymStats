import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { changeSeries } from "../../redux/actions/actionsCompass";

const ColumnCurrentResDetails = (props) => {
  const selectSeriesHandler = (selectedSeries) => {
    props.changeSeries(selectedSeries);
  };

  const getStyle = (seriesPoint) => {
    const { currentSeries: selected } = props.reducerCompass;
    const sameNumber = seriesPoint.number === selected.number;
    const sameValueName = props.valueName === selected.valueName;

    const textStyle = {
      color: "white",
      textAlign: "center",
      textAlignVertical: "center",
      fontSize: 18,
      height: 30
    };
    if (sameNumber && sameValueName) {
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
            selectSeriesHandler({
              number: series.number,
              valueName: props.valueName,
              updated: new Date().toISOString()
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
    changeSeries: (selectedSeries) => dispatch(changeSeries(selectedSeries))
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
