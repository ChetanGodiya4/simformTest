import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { deviceSize } from "../theme/dimension";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  justCen: {
    justifyContent: "center"
    // alignItems: "center"
  },
  row: {
    flexDirection: "row"
  },
  space: {
    justifyContent: "space-between"
  }
});
export default function Block({
  row = false,
  space = false,
  justCen = false,
  children = <View />,
  cStyle = {},
  nonFlex = 1
}) {
  const rowStyle = row && styles.row;
  const spaceBet = space && styles.space;
  const justCenterStyle = justCen && styles.justCen;
  // <KeyboardAvoidingView
  //   contentContainerStyle={{
  //     height: deviceSize.height,
  //     backgroundColor: "red"
  //   }}
  // >
  return (
    <View
      style={[
        styles.container,
        rowStyle,
        spaceBet,
        justCenterStyle,
        cStyle,
        { flex: nonFlex }
      ]}
    >
      {children}
    </View>
  );
}
// </KeyboardAvoidingView>
