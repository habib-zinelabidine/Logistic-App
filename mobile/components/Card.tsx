import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../utils/Dimension";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/person.jpg")}
            style={{ width: 30, height: 30, borderRadius: 50, margin: 10 }}
          />
          <Text>habib</Text>
        </View>
        <Text style={{ color: "green" }}>In Transist</Text>
      </View>
      <View style={{flexDirection:"column", justifyContent:"space-between"}}>
        <View style={styles.CardContent}>
          <View>
            <Text style={styles.title}>Task</Text>
            <Text>Chemical Delivery</Text>
          </View>
          <View>
            <Text style={styles.title}>Departed</Text>
            <Text>20 June, 02:05pm</Text>
          </View>
        </View>
        <View style={styles.CardContent}>
          <View>
            <Text style={styles.title}>Current Location</Text>
            <Text>1141,Hemiltone tower, Newyork, USA</Text>
          </View>
          <MaterialCommunityIcons name="map" size={24} color="#feb940" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: windowWidth - 20,
    margin: 10,
    backgroundColor: "white",
  },
  title:{
    color:"gray"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
  },
  CardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
    margin: 10,
  },
});
export default Card;
