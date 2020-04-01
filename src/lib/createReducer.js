export default function createReducer(initial, handler) {
  return function reducer(state = initial, action) {
    if (handler.hasOwnProperty(action.type)) {
      return handler[action.type](state, action);
    } else {
      return state;
    }
  };
}
