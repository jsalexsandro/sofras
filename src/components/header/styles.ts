import { colors } from "@/styles/colors"
import { padding } from "@/styles/padding"
import { text } from "@/styles/text"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: padding.medium,
    gap: 8
  },

  text: {
    fontSize: text.large,
    color: colors.violet[600],
  }
})