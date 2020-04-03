import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation/appNav";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Font from "expo-font";
console.disableYellowBox = true;

export default function App() {
  React.useEffect(async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      "roboto-bold": require("./assets/fonts/Roboto-Black.ttf")
    });
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
