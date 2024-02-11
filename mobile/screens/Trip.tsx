import { View, Text } from "react-native";
import React from "react";
import MainContainer from "../components/MainContainer";
import { Button, TextInput } from "react-native-paper";
import AppButton from "../components/AppButton";
import { windowWidth } from "../utils/Dimension";
import { FontAwesome } from "@expo/vector-icons";

const Trip = () => {
  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "90%",
            borderRadius: 10,
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <View
            style={{
              width: "15%",
              backgroundColor: "white",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome name="circle" size={24} color="red" />
            <View
              style={{ width: 0, borderColor: "black", borderStyle: "dashed" }}
            >
              <Text>---</Text>
            </View>
            <FontAwesome name="circle" size={24} color="green" />
          </View>
          <View style={{ width: "85%", backgroundColor: "white" }}>
            <TextInput style={{ backgroundColor: "white" }} />
            <TextInput
              style={{ backgroundColor: "white", borderColor: "transparent" }}
            />
          </View>
          
        </View>
        <AppButton onPress={() => {}} title="Continue" />
      </View>
    </MainContainer>
  );
};

export default Trip;
