import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import MainContainer from "../components/MainContainer";
import InfoCard from "../components/InfoCard";
import { CustomTabBarBottom } from "../components/CustomTabBarBottom";

const Drivers = ({ route }) => {
  const tab = [1, 2, 3, 4, 5, 6];
  const handleCustomButtonPress = () => {
    // Custom logic for button press in Screen1
    console.log('Custom button pressed in Screen1');
  };
  return (
    <MainContainer>

      <ScrollView>
        {tab.map((e) => (
          <InfoCard
            key={e}
            image={require("../assets/person.jpg")}
            title="Habib"
            subtitle="+216 12345678"
            status="In Transist"
          />
        ))}
      </ScrollView>
      <CustomTabBarBottom onPress={()=>console.log("Drivers")}/>
    </MainContainer>
  );
};

export default Drivers;
