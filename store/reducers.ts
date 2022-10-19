import { combineReducers } from "redux";
import * as types from "./types";

const initialAppState: appModel = {
  navExpended: false,
  searchExpended: false,
};

const appReducer = (state = initialAppState, { type, payload }): appModel => {
  switch (type) {
    case types.TOGGLE_NAV:
      return { ...state, navExpended: payload };
    case types.TOGGLE_SEARCH:
      return { ...state, searchExpended: payload };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  app: appReducer,
};

export default combineReducers(reducers);
