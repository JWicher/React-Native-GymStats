import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = ({ title, menu = false }) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>{title}</Text>
      {menu && <Text style={styles.headerTitle}>&#9776;</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    paddingBottom: 15,
    paddingTop: 33,
    backgroundColor: Colors.elegantColoDark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 10
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
