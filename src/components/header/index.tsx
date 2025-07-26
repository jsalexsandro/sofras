import { Text, View } from "react-native";
import { WaveSineIcon } from "phosphor-react-native"
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={ styles.container }>
      <WaveSineIcon size={ 44 } weight="bold" color={ colors.violet[600] } />
      <Text style={ styles.headerline }>
        Sofras, controle suas cifras
      </Text>
      <Text style={ styles.description }>
        Tenha o controle total de suas cifras, crie, edite, importe e visualize suas cifras!
      </Text>
    </View>
  );
}
