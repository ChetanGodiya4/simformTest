import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";

export class AuthLoadingScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.navigate("Auth");
    // console.log(this.props);
    // alert("d");
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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
