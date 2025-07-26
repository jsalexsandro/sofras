import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Icon as IconClass, IconProps as IconPropsClass } from "phosphor-react-native"

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...props}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]} disabled={ isLoading } {...props}>
      { !isLoading ? children : <ActivityIndicator color={ colors.gray[50] }/> }
    </TouchableOpacity>
  )
}

function Title({ children }: { children?: React.ReactNode }) {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  )
}

type IconProps = IconPropsClass & {
  icon: IconClass
}

function Icon({ icon: IconComponent, ...props }: IconProps){
 return (
  <IconComponent {...props} color={ colors.gray[50] } />
 )
}

Button.Title = Title;
Button.Icon  = Icon

export {
  Button
}