import { colors } from "@/src/app/colors"
import { LucideIcon } from "lucide-react-native"
import { Text, View } from "react-native"
import { styles } from "./styles"

type ViewProps = {
  Icon: LucideIcon
  Numero: string
  subTitulo: string
}

export function Cards({ Icon, Numero, subTitulo }: ViewProps) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icone} color={colors.purple[300]} size={18} />
      <View style={styles.titulos}>
        <Text style={styles.titulo}>{Numero}</Text>
        <Text style={styles.subtitulo}>{subTitulo}</Text>
      </View>
    </View>
  )
}
