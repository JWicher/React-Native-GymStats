import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../Screen";
import Header from "../Header";
import StatsTable from "../Stats_table";
import ExcerciseList from "../TrainingGroups/ExcerciseList";
import DashBoardExcercises from "../DashBoards/DashBoardExcercises";
import { connect } from "react-redux";
import trainingService from "../../services/trainingService";

class TrainingScreen extends Component {
  state = {
    training: {},
    excercise: { id: "" }
  };
  async componentDidMount() {
    const training = await this.getTraining();
    const excercise = await this.getExcercise();
    this.setState({ training, excercise });
  }

  async componentDidUpdate(previousProps, previousState) {
    const prevExcerciseId = previousProps.reducerCompass.currentExcercise.id;
    const currExcerciseId = this.props.reducerCompass.currentExcercise.id;
    if (prevExcerciseId !== currExcerciseId) {
      const excercise = await trainingService.getExcerciseById(currExcerciseId);
      this.setState({ excercise });
    }
  }

  async getTraining() {
    const { currentTraining } = this.props.reducerCompass;
    return await trainingService.getTrainingById(currentTraining.id);
  }
  async getExcercise() {
    const { currentExcercise } = this.props.reducerCompass;
    return await trainingService.getExcerciseById(currentExcercise.id);
  }
  render() {
    const { training, excercise } = this.state;
    const readyExcercise = excercise.id !== "";
    console.log("excercise", excercise);

    return (
      <Screen>
        <Header title={training.name} menu={true} />
        {training.id && <StatsTable training={training} />}
        <View style={styles.trainingDayParts}>
          <ExcerciseList />
        </View>
        {readyExcercise && <DashBoardExcercises excercise={excercise} />}
      </Screen>
    );
  }
}

export default connect((state) => state)(TrainingScreen);

const styles = StyleSheet.create({
  trainingDayParts: {
    width: "100%",
    height: 170,
    maxHeight: 170,
    overflow: "hidden"
  }
});
// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Screen from "../Screen";
// import Header from "../Header";
// import StatsTable from "../Stats_table";
// import ExcerciseList from "../TrainingGroups/ExcerciseList";
// import DashBoardExcercises from "../DashBoards/DashBoardExcercises";
// import { connect } from "react-redux";
// import trainingService from "../../services/trainingService";
import { excercises } from "../../services/Constants";

// class TrainingScreen extends Component {
//   state = {
//     training: {},
//     excercise: {}
//   };
//   async componentDidMount() {
//     console.log("cdm");
//     const training = await this.getTraining();
//     const excercise = await this.getExcercise();
//     this.setState({ training, excercise });
//   }
//   static getDerivedStateFromProps = async (props, state) => {
//     const a = await trainingService.getExcerciseById(
//       props.reducerCompass.currentExcercise.id
//     );
//     console.log("a", props.reducerCompass.currentExcercise.id);
//     console.log("b", state.excercise.id);

//     if (props.reducerCompass.currentExcercise.id !== state.excercise.id) {
//       return {
//         excercise: a
//       };
//     }
//     return null;
//   };

//   async getTraining() {
//     const { currentTraining } = this.props.reducerCompass;
//     return await trainingService.getTrainingById(currentTraining.id);
//   }
//   async getExcercise() {
//     const { currentExcercise } = this.props.reducerCompass;
//     return await trainingService.getExcerciseById(currentExcercise.id);
//   }
//   render() {
//     const { training, excercise } = this.state;
//     const readyExcercise = excercise !== "";
//     console.log("sdfsdf", excercise);

//     return (
//       <Screen>
//         <Header title={training.name} menu={true} />
//         {training.id && <StatsTable training={training} />}
//         <View style={styles.trainingDayParts}>
//           <ExcerciseList />
//         </View>
//         {/* {readyExcercise && <DashBoardExcercises excercise={excercise} />} */}
//       </Screen>
//     );
//   }
// }

// export default connect((state) => state)(TrainingScreen);

// const styles = StyleSheet.create({
//   trainingDayParts: {
//     width: "100%",
//     height: 170,
//     maxHeight: 170,
//     overflow: "hidden"
//   }
// });
