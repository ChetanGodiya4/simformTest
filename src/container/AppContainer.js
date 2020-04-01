import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { appContainerStyle } from "./appContainer.style";

// class AppContainer extends Component {
//   render() {

//     return (

//     );
//   }
// }

import { colorPallet } from "../theme/colors";
import { deviceSize } from "../theme/dimension";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AppContainer = ({ children, back = colorPallet.white }) => {
  const background = { backgroundColor: back };
  return (
    <View style={[appContainerStyle.container, background]}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ height: deviceSize.height }}
      >
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AppContainer;
