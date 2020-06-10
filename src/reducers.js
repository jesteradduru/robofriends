import {
  CHANGE_SEARCH_VALUE,
  REQUEST_API_PENDING,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILED,
  CHANGE_ACTIVE_PAGE,
  VIEW_PROFILE,
} from "./constants";

const initialState = {
  searchValue: "",
  activePage: "cardlists",
};

const initialStateApis = {
  isPending: false,
  error: "",
  robots: [],
  posts: [],
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

export const requestApi = (state = initialStateApis, action = {}) => {
  switch (action.type) {
    case REQUEST_API_PENDING:
      return Object.assign({}, state, {
        isPending: true,
        posts: [],
      });
    case REQUEST_API_SUCCESS:
      return action.state === "posts"
        ? Object.assign({}, state, {
            isPending: false,
            posts: action.payload,
          })
        : Object.assign({}, state, {
            isPending: false,
            robots: action.payload,
          });
    case REQUEST_API_FAILED:
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
