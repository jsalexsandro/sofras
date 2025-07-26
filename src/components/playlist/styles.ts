import { colors } from "@/styles/colors"
import { padding } from "@/styles/padding"
import { text } from "@/styles/text"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    paddingTop: padding.medium,
    paddingBottom: padding.medium,
    flexDirection: "row",
    gap: 8,
  },

  section: {
    flex: 1,
  },

  title: {
    fontFamily: "Rubik_500Medium",
    fontSize: text.base,
    fontWeight: "500",
    color: colors.stone[100],
  },

  subtitle: {
    fontFamily: "Rubik_500Medium",
    fontSize: 12,
    fontWeight: "500",
    color: colors.stone[400],
  }
})