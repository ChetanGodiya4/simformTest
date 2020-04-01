import { combineReducers } from "redux";
import { provideToStore } from "./reducers/auth/authRed";
import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const reduces = combineReducers(Object.assign({ provideToStore }));

function configureStore(initial) {
  const enhance = compose(applyMiddleware(thunkMiddleware, logger));
  return createStore(reduces, initial, enhance);
}
const persistedReducer = persistReducer(persistConfig, reduces);

export const store = configureStore({});
