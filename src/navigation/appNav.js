import { AuthStack } from "./auth";
import { AppStack } from "./home";
import AuthLoadingScreen from "../screens/utils/AuthLoadingScreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
