import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainContainer from "../components/MainContainer";
import InfoCard from "../components/InfoCard";

const Tracks = () => {
  const tab = [1, 2, 3, 4, 5, 6];
  return (
    <MainContainer>
      <ScrollView>
        {tab.map((e) => (
          <InfoCard
            key={e}
            image={require("../assets/transport.jpg")}
            title="GTY 1020"
            subtitle="SCANIA R370"
            status="In Transist"
          />
        ))}
      </ScrollView>
    </MainContainer>
  );
};

export default Tracks;
