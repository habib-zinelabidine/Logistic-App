import { View, Text } from "react-native";
import React, { Children } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomTabBarBottom } from "./CustomTabBarBottom";

const MainContainer = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1c2025" }}>
      {children}
    </SafeAreaView>
  );
};

export default MainContainer;
