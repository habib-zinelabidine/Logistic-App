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
} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SigninScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/transport.jpg")}
        style={styles.container}
      >
        <View style={styles.loginForm}>
          <Text>Sign In</Text>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" />
          <Button
            onPress={() => navigation.navigate("Signup")}
            title="Sign Up"
          />
        </View>
      </ImageBackground>
    </>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "column",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  loginForm: {
    height: windowHeight / 1.5,
    width: windowWidth / 2,
    backgroundColor: "white",
  },
});
export default SigninScreen;
