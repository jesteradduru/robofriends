import {
  CHANGE_SEARCH_VALUE,
  REQUEST_API_PENDING,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILED,
  VIEW_PROFILE,
  CHANGE_ACTIVE_PAGE,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: text,
});

export const requestApi = (url, state) => (dispatch) => {
  dispatch({ type: REQUEST_API_PENDING });
  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: REQUEST_API_SUCCESS, payload: data, state })
    )
    .catch((error) => dispatch({ type: REQUEST_API_FAILED, payload: error }));
};

export const changeActivePage = (page) => ({
  type: CHANGE_ACTIVE_PAGE,
  payload: page,
});

export const viewProfile = (id) => ({
  type: VIEW_PROFILE,
  payload: id,
});
