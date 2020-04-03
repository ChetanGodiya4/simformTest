import React, { Component } from "react";
import { Alert, View, Text, FlatList, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import AppContainer from "../../../container/AppContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { stripsSyles } from "./strips.styles";
import StripList from "../../../components/lists/stripList/StripsList";
var dataAlert = [];
export class Strips extends Component {
  state = {
    dataToDisplay: {}
  };
  renderItems = items => {
    return <StripList {...items} onPressCells={this.onPressCells} />;
  };
  onPressCells = (color, text, key) => {
    const { listData = [] } = this.props;
    const { dataToDisplay = [] } = this.props;

    const hasIndex = dataAlert.filter(items => {
      return items.title == key;
    });
    if (hasIndex.length == 0) {
      dataAlert.push({
        title: key,
        value: text
      });
    } else {
      var removeIndex = dataAlert
        .map(function(item) {
          return item.title;
        })
        .indexOf(key);
      dataAlert.splice(removeIndex, 1);
      dataAlert.push({
        title: key,
        value: text
      });
    }
    dataAlert = dataAlert;
  };
  onPressNext() {
    var msg = "";
    dataAlert.map(items => {
      msg = msg + `${items.title} : ${items.value == "" ? 0 : items.value}\n`;
    });
    Alert.alert("Strip", msg);
  }

  render() {
    const { listData = [] } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={stripsSyles.btnNextContainer}>
          <TouchableOpacity
            style={stripsSyles.btn}
            onPress={() => this.onPressNext()}
          >
            <Text style={stripsSyles.nextStyle}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={stripsSyles.testContainer}>
          <Text style={stripsSyles.testStyle}>Test Strip</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={listData}
            contentContainerStyle={{ flexGrow: 1, padding: 10 }}
            renderItem={this.renderItems}
            keyboardShouldPersistTaps="always"
            keyExtractor={items => items.title}
          />
          <View style={stripsSyles.absoluteView} pointerEvent="none">
            <View style={stripsSyles.borderView} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ stripReducer }) => {
  return { listData: stripReducer.trips };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Strips);
