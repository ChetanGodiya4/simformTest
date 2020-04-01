import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { loginButtonStyle } from "./loginButton.style";

export default function LoginButton({ title = "missing", onPress = () => {} }) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={loginButtonStyle.container}
    >
      <Text style={loginButtonStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
}
