import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const ColumnWithResults = (props) => {
  const data = props.data.length ? props.data : [];

  const getStyle = (element) => {
    const isSelected =
      element.number === props.selected.number &&
      props.selected.valueName === props.valueName;
    const cssStyles = { ...styles.value, ...props.textColor };

    if (isSelected) {
      cssStyles.borderColor = Colors.white;
      cssStyles.borderWidth = 1;
      cssStyles.borderRadius = 20;
    }
    return cssStyles;
  };

  function renderCurrentResults() {
    return data.map((d) => (
      <TouchableOpacity
        key={d.number}
        onPress={() =>
          props.onSelecPointToModify({
            number: d.number,
            valueName: props.valueName
          })
        }
      >
        <View style={styles.item}>
          <Text style={getStyle(d)}>{d[props.valueName]}</Text>
        </View>
      </TouchableOpacity>
    ));
  }

  function renderLastTrainingResults() {
    return data.map((d) => (
      <View key={d.number} style={styles.item}>
        <Text style={{ ...styles.value, ...props.textColor }}>
          {d[props.valueName]}
        </Text>
      </View>
    ));
  }
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.header, ...props.textColor }}>
        {props.header}
      </Text>
      {props.currentTraining
        ? renderCurrentResults()
        : renderLastTrainingResults()}
    </View>
  );
};

export default ColumnWithResults;

const styles = StyleSheet.create({
  container: {},
  item: {
    height: 36,
    width: 36,
    maxHeight: 36,
    maxWidth: 36,
    justifyContent: "center",
    alignContent: "center"
  },

  header: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.rgbaLimeStrong
  },

  value: {
    textAlign: "center",
    fontSize: 20
  }
});
