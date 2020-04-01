import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/auth/login/Login";
import VideoContainer from "../screens/app/video/VideoContainer";
import Trips from "../screens/app/trips/Trips";
import AuthLoadingScreen from "../screens/utils/AuthLoadingScreen";

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

export const AuthStack = createStackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});
