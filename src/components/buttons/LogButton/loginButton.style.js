import { StyleSheet } from "react-native";
import { colorPallet } from "../../../theme/colors";
export const loginButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    paddingHorizontal: "10%",
    paddingVertical: "2.5%",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 5
  },
  title: {
    color: colorPallet.white
  }
});
