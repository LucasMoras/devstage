import { colors } from "@/src/app/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    pontos:{
        fontSize: 24,
        fontWeight: '500',
        color: colors.gray[200]
    },
    posicoes:{
        fontSize: 18,
        color: colors.gray[300]
    },
    medalha: {
        height: 85.23,
        width: 56,
        position: 'absolute',
        top: 0,
        right: 32
    },
    contaier:{
        padding: 28,
        height: 110,
        width: 343,
        gap: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: colors.gray[700],
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray[600]
    }
})