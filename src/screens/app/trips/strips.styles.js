import { StyleSheet } from "react-native";
import { colorPallet } from "../../../theme/colors";
import { normalize } from "../../../lib/responsiveFont";
import { deviceSize } from "../../../theme/dimension";
export const stripsSyles = StyleSheet.create({
  btnNextContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 18,
    backgroundColor: colorPallet.darkGrey
  },
  nextStyle: {
    color: colorPallet.white,
    fontSize: normalize(13)
  },
  testContainer: {
    // backgroundColor: "red",
    paddingHorizontal: "5%",
    paddingVertical: 5
  },
  testStyle: {
    color: "rgba(0,0,100,1)",
    fontSize: normalize(20),
    fontFamily: "roboto-bold"
  },
  mainListContainer: {
    flex: 1,
    backgroundColor: "red"
  },
  absoluteView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: deviceSize.width * 0.195,
    // backgroundColor: "red",
    alignItems: "center"
  },
  borderView: {
    flex: 1,
    width: 26,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colorPallet.grey
    // backgroundColor: "blue"
  }
});
