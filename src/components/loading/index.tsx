import { colors } from "@/styles/colors";
import { WaveSineIcon } from "phosphor-react-native";
import { ActivityIndicator, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.stone[950] }}>
      <WaveSineIcon size={ 64 } weight="bold" color={ colors.violet[600] } />
      <ActivityIndicator style={{ position:"absolute", bottom:100 }} color={ colors.gray[400] } />
    </View>
  )
}