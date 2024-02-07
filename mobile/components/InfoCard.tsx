import { View, Text, Image } from "react-native";
import React from "react";

const InfoCard = ({image,title,subtitle,status}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding:10,
        margin : 10,
        borderRadius:10
      }}
    >
      <View style={{flexDirection:"row"}}>
        <Image
          source={image}
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
        <View style={{marginHorizontal:10}}>
          <Text style={{fontSize:20}}>{title}</Text>
          <Text style={{color:"gray"}}>{subtitle}</Text>
        </View>
      </View>
      <Text style={{color:"green"}}>{status}</Text>
    </View>
  );
};

export default InfoCard;
