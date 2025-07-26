import { Header } from "@/components/header";
import { padding } from "@/styles/padding";
import { Text, View } from "react-native";

export default function New(){
  return (
    <View style={{ flex: 1, padding:padding.xxLarge, gap: 16 }}>
      <Header type="IconAndTitle" />
    </View>
  )
}