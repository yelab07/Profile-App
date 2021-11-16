import * as React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            name: "Anthony",
            image: require("../images/Anthony.jpg"),
            bio: "This is something about me.",
          })
        }
        activeOpacity={0.5}
      >
        <Image
          source={require("../images/Anthony.jpg")}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            name: "Beakal",
            image: require("../images/Beakal.jpg"),
            bio: "This is something about me.",
          })
        }
        activeOpacity={0.5}
      >
        <Image
          source={require("../images/Beakal.jpg")}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            name: "Yiley",
            image: require("../images/Yiley.jpg"),
            bio: "This is something about me.",
          })
        }
        activeOpacity={0.5}
      >
        <Image
          source={require("../images/Yiley.jpg")}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            name: "Ezer",
            image: require("../images/Ezer.jpg"),
            bio: "This is something about me. It's nothing.",
          })
        }
        activeOpacity={0.5}
      >
        <Image
          source={require("../images/Ezer.jpg")}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageIconStyle: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 10,
  },
});

export default HomeScreen;
