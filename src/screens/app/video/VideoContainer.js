import React, { Component } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

import { connect } from "react-redux";

import { SafeAreaView } from "react-native-safe-area-context";
import { videoStyles } from "./videoContainer.styles";
import * as homeActions from "../../../redux/actions/homeActions/homeActions";
import VideoList from "../../../components/lists/videoList/VideoList";
class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      endReached: false
    };
  }
  componentDidMount() {
    try {
      const { fetchVideo } = this.props;
      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  }
  rednerList = items => {
    console.log(items);
    return <VideoList {...items} key={items.index} />;
  };
  onRefresh() {
    this.setState({ isFetching: true }, () => {
      const { fetchVideo } = this.props;
      try {
        fetchVideo().then(res => {
          console.log(res);
          this.setState({
            isFetching: false
          });
        });
      } catch (error) {}
    });
  }
  onEnd() {
    if (!this.state.endReached) {
      this.setState({ endReached: true }, () => {
        const { fetchVideo } = this.props;
        try {
          fetchVideo("more").then(res => {
            console.log(res);
            this.setState({
              endReached: false
            });
          });
        } catch (error) {}
      });
    }
  }
  render() {
    const { videos = [], fetchVideo } = this.props;
    const { isFetching = false, endReached = false } = this.state;
    console.log("->", videos.length);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={videoStyles.header}>
          <Text style={videoStyles.headerText}>Video</Text>
        </View>
        {videos.length == 0 && (
          <View>
            <Text>Fetching videos please wait...</Text>
          </View>
        )}
        <FlatList
          data={videos}
          onRefresh={() => this.onRefresh()}
          refreshing={isFetching}
          keyExtractor={item => item.index}
          onEndReached={() => this.onEnd()}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={this.rednerList}
          onEndReachedThreshold={0.01}
        />
        {endReached && <ActivityIndicator />}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ homeReducer }) => {
  return { ...homeReducer };
};
export default connect(
  mapStateToProps,
  homeActions
)(VideoContainer);
