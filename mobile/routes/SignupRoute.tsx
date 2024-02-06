import { Button } from "react-native";

export const SignUpRoute = ({ navigation }) => {
    return (
      <Button
        title="Go to habib's profile"
        onPress={() => navigation.navigate("Profile", { name: "habib" })}
      />
    );
  };