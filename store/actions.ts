import * as types from './types'

export const toggleNav = (payload: boolean) => ({ type: types.TOGGLE_NAV, payload })

export const toggleSearch = (payload: boolean) => ({ type: types.TOGGLE_SEARCH, payload })

// // INITIALIZES CLOCK ON SERVER
// export const serverRenderClock = () => (dispatch) =>
//   dispatch({
//     type: types.TICK,
//     payload: { light: false, ts: Date.now() },
//   })

// // INITIALIZES CLOCK ON CLIENT
// export const startClock = () => (dispatch) =>
//   setInterval(() => {
//     dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
//   }, 1000)

// // INCREMENT COUNTER BY 1
// export const incrementCount = () => ({ type: types.INCREMENT })

// // DECREMENT COUNTER BY 1
// export const decrementCount = () => ({ type: types.DECREMENT })

// // RESET COUNTER
// export const resetCount = () => ({ type: types.RESET })

