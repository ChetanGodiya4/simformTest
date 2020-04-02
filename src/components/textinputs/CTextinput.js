import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { colorPallet } from "../../theme/colors";
import { normalize } from "../../lib/responsiveFont";
import { FontAwesome } from "@expo/vector-icons";
import Block from "../../container/Block";
const styles = StyleSheet.create({
  textInput: {
    // borderBottomWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
    flex: 1
  },
  textHeaderStyle: {
    fontSize: normalize(11),
    color: colorPallet.grey
  },
  container: {
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colorPallet.grey
  },
  error: {
    color: "red",
    fontSize: normalize(11),
    paddingVertical: 5
  }
});
export default function CTextinput({
  placeholder = "",
  onChangeText = () => {},
  secure = false,
  title = "missing",
  error = false,
  value = false,
  keyboardType = "default"
}) {
  const [secureOrNot, setSecureOrNot] = React.useState(secure);
  return (
    <View style={styles.container}>
      <Text style={styles.textHeaderStyle}>{title}</Text>
      <View style={styles.row}>
        <TextInput
          keyboardType={keyboardType}
          value={value && value}
          style={styles.textInput}
          placeholder={placeholder}
          secureTextEntry={secureOrNot}
          onChangeText={text => onChangeText(text)}
        />
        {secure && (
          <TouchableOpacity onPress={() => setSecureOrNot(!secureOrNot)}>
            <FontAwesome
              name="eye"
              color={secureOrNot ? colorPallet.grey : "orange"}
              size={normalize(18)}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>*{error}</Text>}
    </View>
  );
}
