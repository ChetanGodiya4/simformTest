import React from "react";
import { View, Text, Image, TouchableOpacity, Share } from "react-native";
import { videoListStyles } from "./videoList.styles";
import { FontAwesome } from "@expo/vector-icons";
import { colorPallet } from "../../../theme/colors";
import { Video } from "expo-av";

export default function VideoList({ item, onPlay = () => {} }) {
  const [shouldPlay, setShouldPlay] = React.useState(false);
  const videoRef = React.useRef();
  React.useEffect(() => {
    return () => {
      console.log(videoRef);
    };
  }, []);
  async function onShare() {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const { thumbnail_url = "", video_url = "" } = item;
  return (
    <View style={videoListStyles.container}>
      <View style={videoListStyles.header}>
        <TouchableOpacity
          onPress={() => onShare()}
          style={videoListStyles.shareBtn}
        >
          <FontAwesome name="share" color={colorPallet.white} />
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          setShouldPlay(!shouldPlay);
          try {
            //   console.log(videoRef._handleNewStatus("pause"));
          } catch (error) {}
        }}
      > */}
      <Video
        ref={videoRef}
        source={{ uri: video_url }}
        rate={1.0}
        volume={1.0}
        useNativeControls={true}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={shouldPlay}
        style={videoListStyles.img}
      />
      {/* <View style={videoListStyles.fixCenter}>
        <FontAwesome name="play" style={videoListStyles.playIcon} />
      </View> */}
      {/* </TouchableOpacity> */}
    </View>
  );
}
