import createReducer from "../../../lib/createReducer";
import { LOGIN } from "../../types/allTypes";

const initial = {
  data: []
};

export const authReducer = createReducer(initial, {
  [LOGIN](state, action) {
    return {
      ...state,
      ...action.data,
      success: true
    };
  }
  // ["persist/REHYDRATE"](state, action) {
  //   newState = { ...action.payload.userStore };
  //   return newState;
  // }
});
