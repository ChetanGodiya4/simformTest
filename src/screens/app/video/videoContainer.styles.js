import { StyleSheet } from "react-native";
import { normalize } from "../../../lib/responsiveFont";

export const videoStyles = StyleSheet.create({
  header: {
    height: 55,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "red"
  },
  headerText: {
    fontSize: normalize(16)
  }
});
