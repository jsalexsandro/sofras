import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

function Button({ children }: { children?: React.ReactNode }) {
  return (
    <TouchableOpacity activeOpacity={ 0.7 } style={ styles.button }>
      { children }
    </TouchableOpacity>
  )
}

function Title({ children }: { children?: React.ReactNode }) {
  return (
    <Text style={ styles.title }>
      { children }
    </Text>
  )
}

Button.Title = Title;

export {
  Button
}