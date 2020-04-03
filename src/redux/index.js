import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth/authRed";
import { homeReducer } from "./reducers/home/homeReducer";
import { stripReducer } from "./reducers/home/stripReducer";
import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
const reducer = combineReducers(
  Object.assign({ authReducer, homeReducer, stripReducer })
);

//For avoid Spammy peoples
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(persistedReducer, initialState, enhancer);
}
export const store = configureStore({});

export const persistor = persistStore(store);
// persistor.purge();
//
