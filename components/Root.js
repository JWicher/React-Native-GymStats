import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import TrainingScreen from "./screens/TrainingScreen";
import TrainingDayScreen from "./screens/TrainingDayScreen";
import ExcerciseScreen from "./screens/ExcerciseScreen";
import UserSettingsScreen from "./screens/UserSettingsScreen";
import StatsScreen from "./screens/StatsScreen";
import { connect } from "react-redux";

const Root = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Training: { screen: TrainingScreen },
    TrainingDay: { screen: TrainingDayScreen },
    Excercise: { screen: ExcerciseScreen },
    UserSettings: { screen: UserSettingsScreen },
    Stats: { screen: StatsScreen }
  },
  {
    initialRouteName: "Training",
    defaultNavigationOptions: {
      header: null
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
);

const App = createAppContainer(Root);

export default connect((state) => state)(App);
