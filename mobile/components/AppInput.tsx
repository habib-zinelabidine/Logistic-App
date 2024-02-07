import { View, Text, TextInput,  StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AppInput = ({placeholder,secureTextEntry}) => {
  return (
    <TextInput placeholder={placeholder} style={styles.TextInput} secureTextEntry={secureTextEntry}/>
  )
}

export default AppInput

var styles = StyleSheet.create({

    TextInput:{
      width : windowWidth - 50,
      backgroundColor : "rgba(237,237,238,0.6)",
      borderRadius : 10,
      padding : 20,
      margin: 10
    },
  
  });