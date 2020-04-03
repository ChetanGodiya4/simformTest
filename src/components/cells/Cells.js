import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  constainer: {
    height: 25,
    width: "90%",
    // backgroundColor: ,
    borderRadius: 5
  }
});
export default function Cells({
  val,
  selectedColor = "",
  backgroundColor = "red",
  onPress = () => {}
}) {
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => onPress(backgroundColor, val)}
    >
      <View
        style={[
          styles.constainer,
          {
            backgroundColor: backgroundColor,
            borderColor: "green",
            borderWidth: selectedColor == backgroundColor ? 2 : 0
          }
        ]}
      />
      <Text style={{ textAlign: "center", fontSize: 12 }}>{val}</Text>
    </TouchableOpacity>
  );
}
