import { combineReducers } from "redux";
import * as types from "./types";

// COUNTER REDUCER
// const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1
//     case types.DECREMENT:
//       return state - 1
//     case types.RESET:
//       return 0
//     default:
//       return state
//   }
// }

// // INITIAL TIMER STATE
// const initialTimerState = {
//   lastUpdate: 0,
//   light: false,
// }

// // TIMER REDUCER
// const timerReducer = (state = initialTimerState, { type, payload }) => {
//   switch (type) {
//     case types.TICK:
//       return {
//         lastUpdate: payload.ts,
//         light: !!payload.light,
//       }
//     default:
//       return state
//   }
// }

const initialAppState: appModel = {
  navExpended: false,
  searchExpended: true,
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
