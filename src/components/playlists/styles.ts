import { colors } from "@/styles/colors";
import { padding } from "@/styles/padding";
import { text } from "@/styles/text";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: padding.small ,
    paddingBottom: padding.small ,
  },

  text: {
    color: colors.stone[400],
    fontFamily: "Rubik_400Regular",
    fontSize: text.small
  }
})