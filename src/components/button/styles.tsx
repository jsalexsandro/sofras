import { colors } from "@/styles/colors";
import { padding } from "@/styles/padding";
import { radius } from "@/styles/radius";
import { text } from "@/styles/text";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor:colors.violet[600],
    width: '100%',
    padding: padding.medium,
    borderRadius: radius.large,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: colors.stone[200],
    fontSize: text.base,
    fontWeight: 400,
    fontFamily: "Rubik_500Medium",
  },
})