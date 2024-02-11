import { TouchableOpacity, View, Image } from "react-native";

export const CustomTabBarBottom = ({ onPress }: any) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        position: "absolute",
        right: 10,
        bottom: 80,
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: "#feb940",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/icons/plus.png")}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
  </TouchableOpacity>
);
