import { CHANGE_SEARCH_VALUE } from "./constants";
const initialState = {
  searchValue: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return Object.assign({}, state, { searchValue: action.payload });
    default:
      return state;
  }
};
