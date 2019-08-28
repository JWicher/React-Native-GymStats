import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const UserSettingsScreen = () => {
  return (
    <Screen>
      <Card>
        <View>
          <Text>UserSettingsScreen</Text>
        </View>
      </Card>
    </Screen>
  );
};

export default UserSettingsScreen;

const styles = StyleSheet.create({});
