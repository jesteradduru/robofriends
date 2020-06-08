import {
  CHANGE_SEARCH_VALUE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  CHANGE_ACTIVE_PAGE,
  VIEW_PROFILE,
} from "./constants";

const initialState = {
  searchValue: "",
  activePage: "cardlists",
};

const initialStateRobots = {
  isPending: false,
  error: "",
  robots: [],
};

const initialStateViewProfile = {
  id: 0,
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return Object.assign({}, state, {
        searchValue: action.payload.toLowerCase(),
      });
    default:
      return state;
  }
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {
        isPending: true,
      });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        robots: action.payload,
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload,
      });
    default:
      return state;
  }
};

export const changeActivePage = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ACTIVE_PAGE:
      return Object.assign({}, state, { activePage: action.payload });
    default:
      return state;
  }
};

export const viewProfile = (state = initialStateViewProfile, action = {}) => {
  switch (action.type) {
    case VIEW_PROFILE:
      return Object.assign({}, state, { id: action.payload });
    default:
      return state;
  }
};
