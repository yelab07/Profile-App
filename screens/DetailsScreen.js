import * as React from "react";
import { Image, View, Text } from "react-native";

const DetailsScreen = ({ route }) => {
  const { name, image, bio } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={image}
        style={{
          height: 150,
          borderRadius: 15,
          width: 150,
          resizeMode: "contain",
        }}
      ></Image>
      <Text>{name}</Text>
      <Text>{bio}</Text>
    </View>
  );
};

export default DetailsScreen;
