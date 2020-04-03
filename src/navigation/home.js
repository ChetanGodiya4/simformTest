import VideoContainer from "../screens/app/video/VideoContainer";
import Strips from "../screens/app/trips/Strips";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const TabNavigator = createBottomTabNavigator(
  {
    Home: VideoContainer,
    Strips: Strips
  },
  {
    navigationOptions: {
      headerShown: false
    }
  }
);
export const AppStack = createStackNavigator({ Home: TabNavigator });
