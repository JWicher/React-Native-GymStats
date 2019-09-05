import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Header from "../components/Header";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;

  return (
    <Screen>
      <Header title="GYM STAT" />

      <Card onPressHandler={() => navigate("UserSettings")}>
        <View>
          <Text style={styles.text}>Użytkownik</Text>
        </View>
      </Card>
      <Card onPressHandler={() => navigate("Training")}>
        <View>
          <Text style={styles.text}>Trening</Text>
        </View>
      </Card>
      <Card onPressHandler={() => navigate("Stats")}>
        <View>
          <Text style={styles.text}>Statystyki</Text>
        </View>
      </Card>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center"
  }
});
