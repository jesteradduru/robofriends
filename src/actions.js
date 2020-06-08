import {
  CHANGE_SEARCH_VALUE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  VIEW_PROFILE,
  CHANGE_ACTIVE_PAGE,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};

export const changeActivePage = (page) => ({
  type: CHANGE_ACTIVE_PAGE,
  payload: page,
});

export const viewProfile = (id) => ({
  type: VIEW_PROFILE,
  payload: id,
});
