import { Text, View } from "react-native";
import { WaveSineIcon } from "phosphor-react-native"
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={ styles.container }>
      <WaveSineIcon size={32} color={ colors.violet[600] } />
      <Text style={ styles.text }>
        Sofras
      </Text>
    </View>
  );
}
