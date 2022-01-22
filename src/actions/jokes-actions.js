import { SAVE_FAVORITE_JOKES } from "../action-types/jokes-action-types";

export const saveFavoriteJokes = (dispatch, joke) => {
  return dispatch({
    type: SAVE_FAVORITE_JOKES,
    payload: joke
  });
};
