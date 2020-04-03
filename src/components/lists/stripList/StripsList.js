import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Block from "../../../container/Block";
import { deviceSize } from "../../../theme/dimension";
import Cells from "../../cells/Cells";
import { colorPallet } from "../../../theme/colors";

const styles = StyleSheet.create({
  selectedContainer: {
    height: 30,
    width: "15%",
    // justifyContent: "center",
    alignItems: "center"
    // marginHorizontal:
  },
  fillWith: {
    backgroundColor: "blue",
    // flex: 0.5,
    height: 25,
    width: 25
  },
  textInput: {
    // backgroundColor: "red",
    borderRadius: 5,
    width: 60,
    borderWidth: 1,
    marginRight: 10,
    textAlign: "center"
  },
  titleText: {
    fontFamily: "roboto-bold",
    color: colorPallet.darkGrey
  }
});
var textToSubmit = "",
  text = "";
export default function StripList({ item, onPressCells }) {
  // console.log(item);
  const [selectedColor, setSelectedColor] = React.useState("grey");
  const [selectedText, setSelectedText] = React.useState("0");
  const { title = "", values = [], baseColor = [] } = item;
  return (
    <View style={{ marginBottom: 10, paddingVertical: 10 }}>
      <Block
        row
        space
        cStyle={{
          marginLeft: deviceSize.width * 0.18,
          paddingBottom: 10,
          alignItems: "center"
        }}
      >
        <Text style={styles.titleText}>{title}</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          onChangeText={text => {
            text = text;
            textToSubmit = values.indexOf(text);
          }}
          onBlur={() => {
            if (textToSubmit > -1) {
              setSelectedColor(baseColor[textToSubmit]);
              setSelectedText(text);
              onPressCells(baseColor[textToSubmit], text, title);
            }
          }}
          placeholder={selectedText.toString()}
        />
      </Block>
      <Block row space>
        <View style={styles.selectedContainer}>
          <View style={[styles.fillWith, { backgroundColor: selectedColor }]} />
        </View>
        {values.map((items, index) => {
          return (
            <Cells
              key={index}
              val={items}
              selectedColor={selectedColor}
              backgroundColor={baseColor[index]}
              onPress={(color, text) => {
                setSelectedColor(color);
                setSelectedText(text);
                onPressCells(color, text, title);
              }}
            />
          );
        })}
      </Block>
    </View>
  );
}
