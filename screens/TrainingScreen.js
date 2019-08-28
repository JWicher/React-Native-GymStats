import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const TrainingScreen = () => {
  return (
    <Screen>
      <Card>
        <View>
          <Text>TrainingScreen</Text>
        </View>
      </Card>
    </Screen>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({});
