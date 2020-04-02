import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";

export class AuthLoadingScreen extends Component {
  componentDidMount() {
    const { navigation, authReducer } = this.props;

    console.log("next", authReducer);
    const { success = false } = authReducer;
    if (success) {
      navigation.navigate("App");
    } else {
      navigation.navigate("Auth");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Loading...</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingScreen);
