import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ListOfItems = (props) => {
  const data = props.data;

  const checkSelectionStyle = (itemId) => {
    return props.currentSelected === itemId ? styles.selectedItem : {};
  };

  return (
    <View style={styles.container}>
      {data.map((d) => (
        <View
          key={d.id}
          style={{ ...styles.item, ...checkSelectionStyle(d.id) }}
        >
          <Text onPress={() => props.onItemPressHandler(d.id)}>{d.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ListOfItems;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%"
  },
  item: {
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    height: 40,
    justifyContent: "center"
  },
  selectedItem: {
    backgroundColor: Colors.rgbaLimeStrong
  }
});
