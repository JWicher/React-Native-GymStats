import { CHANGE_SELECTED_POINT } from "../constants/actionTypes";

export const changeSelectedPointId = (selectedPoint) => ({
  type: CHANGE_SELECTED_POINT,
  selectedPoint: selectedPoint
});
