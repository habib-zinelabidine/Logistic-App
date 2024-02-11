import { View, Text } from "react-native";
import React from "react";
import MainContainer from "../components/MainContainer";

const Posts = ({ navigation }) => {
  /* const pressHandler = () => {
    console.log("ok");
  };
  navigation.setOptions({
    tabBarButton: (props) => (
      <CustomTabBarBottom {...props} onPress={pressHandler} />
    ),
  }); */
  return (
    <MainContainer>
      <Text>Posts</Text>
    </MainContainer>
  );
};

export default Posts;
