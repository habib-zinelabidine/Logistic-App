import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { windowHeight, windowWidth } from "../utils/Dimension";
const SignupScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style={"light"}/>
      <ImageBackground
        source={require("../assets/transport.jpg")}
        style={styles.container}
      >
        <View style={styles.loginForm}>
          <Text style={styles.head}>Sign Up</Text>
          <View>
            <AppInput placeholder="Email" secureTextEntry={false}/>
            <AppInput
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.SigninText}>
            <Text>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.SigninButton}>Sign in</Text>
            </Pressable>
          </View>
          <AppButton onPress={() => navigation.push("Tabs")} title="Save" />
        </View>
      </ImageBackground>
    </>
  );
};
export default SignupScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
  },
  head: {
    fontSize: 40,
  },
  loginForm: {
    height: windowHeight / 1.5,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  SigninText: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  SigninButton: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
