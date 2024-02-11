import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import Tabs from "./navigation/Tabs";
import { View } from "react-native";
import Trip from "./screens/Trip";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#343b44" }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Trip"
            component={Trip}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={Tabs}
            name="Tabs"
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
