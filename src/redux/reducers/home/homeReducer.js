import createReducer from "../../../lib/createReducer";
import { LOGIN, VIDEO_FETCH, VIDEO_FETCH_MORE } from "../../types/allTypes";

const initial = {
  data: []
};

export const homeReducer = createReducer(initial, {
  [VIDEO_FETCH](state, action) {
    return {
      ...state,
      ...action.data
    };
  },
  [VIDEO_FETCH_MORE](state, action) {
    console.log([state.videos, action.data]);
    return {
      ...state,
      videos: [...state.videos, ...action.data.videos]
    };
  }
});
