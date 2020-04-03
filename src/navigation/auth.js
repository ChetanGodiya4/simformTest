import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/auth/login/Login";

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

export const AuthStack = createStackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  }
});
