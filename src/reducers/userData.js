import { SAVE_USER_DATA } from "../action-types/userData-action-types";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: ""
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return (state = action.payload);
    default:
      return state;
  }
};

export default userData;
