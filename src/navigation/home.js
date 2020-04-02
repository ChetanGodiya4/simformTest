import VideoContainer from "../screens/app/video/VideoContainer";
import Trips from "../screens/app/trips/Trips";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const TabNavigator = createBottomTabNavigator(
  {
    Home: VideoContainer,
    Trips: Trips
  },
  {
    navigationOptions: {
      headerShown: false
    }
  }
);
export const AppStack = createStackNavigator({ Home: TabNavigator });
