import { StyleSheet } from "react-native";
import { normalize } from "../../../lib/responsiveFont";
export const loginStyle = StyleSheet.create({
  forgorContainer: {
    // backgroundColor: "red",
    marginTop: 10,
    paddingLeft: "5%",
    alignItems: "flex-end"
  },
  forgotText: {
    color: "orange",
    fontSize: normalize(11),
    borderBottomWidth: 1,
    borderBottomColor: "orange"
  },
  maskImage: {
    // height: null,
    // width: null,
  }
});
