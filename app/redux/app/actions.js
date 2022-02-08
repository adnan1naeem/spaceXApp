import * as types from "./types";

/**
 * initial app
 */
export const beginInitApp = () => ({
  type: types.INITIAL_APP,
});

export const getData = (data) => ({
  type: types.GET_DATA,
  payload: {
    data,
  },
});
