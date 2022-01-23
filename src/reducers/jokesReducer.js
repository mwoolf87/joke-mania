import { SAVE_FAVORITE_JOKES } from "../action-types/jokes-action-types";

const initialState = [];

const jokes = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FAVORITE_JOKES:
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

export default jokes;
