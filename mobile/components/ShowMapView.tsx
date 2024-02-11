import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimension";
import { CustomTabBarBottom } from "./CustomTabBarBottom";

export default function ShowMapView() {
  return (
    <View>
      <MapView style={styles.map} userInterfaceStyle="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: windowWidth,
    height: windowHeight,
  },
});
