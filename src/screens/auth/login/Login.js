import React, { Component } from "react";
import { Image, Text, View } from "react-native";

import { connect } from "react-redux";
import AppContainer from "../../../container/AppContainer";
import { colorPallet } from "../../../theme/colors";
import { images } from "../../../../assets";
import Block from "../../../container/Block";
import CTextinput from "../../../components/textinputs/CTextinput";
import { loginStyle } from "./login.style";
import LoginButton from "../../../components/buttons/LogButton/LoginButton";
import * as authActions from "../../../redux/actions/authActions/authActions";
const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
const validUsername = "admin@gmail.com",
  validPassword = "Simform.123";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: validUsername,
      password: validPassword,
      usernameVal: false,
      passVal: false
    };
  }
  getText(key, val, validate = "username") {
    if (validate == "username") {
      this.setState({
        usernameVal: !expression.test(val)
      });
    } else if (validate == "pass") {
      this.setState({
        passVal: val.length <= 6
      });
    }

    this.setState({
      [key]: val
    });
  }
  login() {
    const { username, usernameVal, passVal, password } = this.state;
    if (username == "") {
      alert(`Email can't be empty..`);
    } else if (password == "") {
      alert(`Password can't be empty..`);
    } else if (passVal || usernameVal) {
      alert("Please provide valid details");
    } else {
      if (username == validUsername && password == validPassword) {
        const { loginUser, navigation } = this.props;
        try {
          loginUser(username, password).then(res => {
            console.log(res.success);
            const { success } = res;
            if (success) {
              navigation.navigate("App");
            }
          });
        } catch (error) {
          console.log(error);
        }
        // alert("ok");
      } else {
        alert("Email or passwrod is wronged.");
      }
    }
  }
  render() {
    const { username, usernameVal, passVal, password } = this.state;

    return (
      <AppContainer>
        <Block justCen>
          <Block justCen cStyle={{ padding: "5%" }} nonFlex={0}>
            <Image source={images.icon} />
            <CTextinput
              title="Username"
              value={username}
              keyboardType="email-address"
              placeholder="ex. Johndel"
              onChangeText={username =>
                this.getText("username", username, "username")
              }
              error={usernameVal && "Not a valid email address..."}
            />
            <CTextinput
              secure
              title="Password"
              placeholder="********"
              value={password}
              onChangeText={pass => this.getText("password", pass, "pass")}
              error={
                passVal && "Password must contains 6 characters or more..."
              }
            />
          </Block>
          <Block row nonFlex={0} cStyle={loginStyle.forgorContainer} space>
            <Text style={loginStyle.forgotText}>Forgot password ? </Text>
            <LoginButton title="Login" onPress={() => this.login()} />
          </Block>
        </Block>
        <View style={loginStyle.absoluteView}>
          <Image source={images.maskGroup} style={loginStyle.maskImage} />
        </View>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  authActions
)(Login);
