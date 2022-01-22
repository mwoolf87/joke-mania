import { SAVE_USER_DATA } from "../action-types/userData-action-types";

export const saveUserData = (dispatch, userData) => {
  return dispatch({
    type: SAVE_USER_DATA,
    payload: userData
  });
};
