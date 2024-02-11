import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Appbar, Button } from "react-native-paper";
import { windowHeight, windowWidth } from "../utils/Dimension";
import Card from "../components/Card";
import MainContainer from "../components/MainContainer";
import ShowMapView from "../components/ShowMapView";
import { CustomTabBarBottom } from "../components/CustomTabBarBottom";
const HomePage = ({navigation}) => {
  const [ListButton, setListButton] = useState(false);
  const [MapButton, setMapButton] = useState(true);
  const [showView, setshowView] = useState(true);
  return (
    <>
      <MainContainer>
        <View style={styles.AppBarcontainer}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                setListButton(false);
                setMapButton(true);
                setshowView(true);
              }}
              style={{
                backgroundColor: ListButton ? "#343b44" : "black",
                marginLeft: 40,
                ...styles.button,
              }}
            >
              <Text style={{ color: ListButton ? "gray" : "#feb940" }}>
                List View
              </Text>
            </Button>
            <Button
              onPress={() => {
                setMapButton(false);
                setListButton(true);
                setshowView(false);
              }}
              style={{
                backgroundColor: MapButton ? "#343b44" : "black",
                ...styles.button,
              }}
            >
              <Text style={{ color: MapButton ? "gray" : "#feb940" }}>
                Map View
              </Text>
            </Button>
          </View>
          <Appbar.Action
            icon="magnify"
            onPress={() => {}}
            iconColor={"white"}
          />
        </View>
        {showView ? (
          <View style={styles.container}>
            <ScrollView>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </View>
        ) : (
          <ShowMapView />
        )}
      </MainContainer>
      <CustomTabBarBottom
        onPress={
          showView ? () => navigation.navigate("Trip") : () => console.log("map")
        }
      />
    </>
  );
};
const styles = StyleSheet.create({
  AppBarcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#343b44",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    width: windowWidth / 3,
    borderWidth: 0.4,
    borderRadius: 0,
    borderColor: "#000",
  },
  container: {
    height: windowHeight - 115,
  },
});

export default HomePage;
