import { colors } from "@/src/app/index/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 295,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    borderColor: colors.gray[600],
    borderWidth: 1,
    backgroundColor: colors.gray[800],
    padding: 16,
    marginBottom: 14,
  },
  input: {
    flex: 1,
    color: colors.gray[400],
    marginLeft: 8,
  },
})
