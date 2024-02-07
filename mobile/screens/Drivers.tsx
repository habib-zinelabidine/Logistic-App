import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MainContainer from "../components/MainContainer";
import InfoCard from "../components/InfoCard";

const Drivers = () => {
  const tab = [1, 2, 3, 4, 5, 6];

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
    </MainContainer>
  );
};

export default Drivers;
