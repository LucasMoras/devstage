import { colors } from "@/src/app/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    backgroundColor: colors.gray[700],
    height: 98,
    width: 343,
    borderRadius: 10,
    borderColor: colors.gray[600],
    borderWidth: 1,
  },
  subtitulo: {
    color: colors.gray[300],
  },
  titulo: {
    color: colors.gray[200],
    fontSize: 24,
    fontWeight: '500',
  },
  icone: {
    position:"absolute",
    top: 10,
    left: 10,
  },
  titulos:{
    alignItems: 'center',
  }
})