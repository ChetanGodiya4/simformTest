import { StyleSheet } from "react-native";
import { deviceSize } from "../../../theme/dimension";
import { colorPallet } from "../../../theme/colors";
import { normalize } from "../../../lib/responsiveFont";
export const videoListStyles = StyleSheet.create({
  container: {
    height: deviceSize.height * 0.25,
    // backgroundColor: "red",
    // borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    // margin: 20marginh
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: colorPallet.white
  },
  fixCenter: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // backgroundColor: "red",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  playIcon: {
    fontSize: normalize(20),
    color: colorPallet.white,
    // backgroundColor: "black",
    padding: 10,
    // borderRadius: 30,
    // textAlign: "center",
    marginLeft: 5
  },

  img: {
    flex: 1,
    margin: 10,
    borderRadius: 5
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: "flex-end"
  },
  shareBtn: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 50
  }
});
