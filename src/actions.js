import { CHANGE_SEARCH_VALUE } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: text,
});
