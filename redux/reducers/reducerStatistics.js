import { CHANGE_SELECTED_POINT } from "../constants/actionTypes";

const reducerStatistics = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_POINT: {
      return { ...state, currentSelectePoint: action.selectedPoint };
    }

    // no default
  }

  return state;
};

export default reducerStatistics;
