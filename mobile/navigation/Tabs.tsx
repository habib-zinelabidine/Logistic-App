import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import HomePage from "../screens/HomePage";
import Tracks from "../screens/Tracks";
import Drivers from "../screens/Drivers";
import Settings from "../screens/Settings";
import Posts from "../screens/Posts";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();


const Tabs = ({ route }) => {
  const handlePostPress = () => {
    console.log("Clicked on Post button in screen:", route.name);
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent style={"light"} backgroundColor="#343b44" />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "#343b44",
            borderColor: "transparent",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            height: 60,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#feb940" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#feb940" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Tracks"
          component={Tracks}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/track.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#feb940" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#feb940" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Tracks
                </Text>
              </View>
            ),
          }}
        />
        {/* <Tab.Screen
          name="Post"
          component={Posts}
          options={{
            tabBarButton: (props) => (
              <CustomTabBarBottom
                {...props}
                onPress={() => handlePostPress()}

              />
            ),
            tabBarIcon: () => (
              <TouchableOpacity
                onPress={() => handlePostPress()}
              >
                <Image
                  source={require("../assets/icons/plus.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        /> */}
        <Tab.Screen
          name="Drivers"
          component={Drivers}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/driver.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#feb940" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#feb940" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Drivers
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/settings.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#feb940" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#feb940" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Settings
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c2025", // Set your desired background color here
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  header: {
    backgroundColor: "#343b44",
  },
});
