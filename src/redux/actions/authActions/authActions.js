import { LOGIN } from "../../types/allTypes";
import { ERROR } from "jest-validate/build/utils";

export function loginUser(username, password) {
  return dispatch => {
    dispatch({
      type: LOGIN,
      data: { username, password }
    });
    return Promise.resolve({
      success: true
    });
  };
}
