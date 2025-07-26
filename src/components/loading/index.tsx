import { colors } from "@/styles/colors";
import { WaveSineIcon } from "phosphor-react-native";
import { Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.stone[950] }}>
      <WaveSineIcon size={ 64 } weight="bold" color={ colors.violet[600] } />
      <Text style={{ position:"absolute", bottom:100, fontSize: 12, color: colors.stone[400], marginTop: 10 }}>
        Carregando...
      </Text>
    </View>
  )
}