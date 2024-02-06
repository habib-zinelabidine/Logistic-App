import { View, Text, Button } from 'react-native'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button onPress={() => navigation.navigate("Signin")} title="SignIn" />

    </View>
  )
}

export default SignupScreen