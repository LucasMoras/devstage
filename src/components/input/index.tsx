import { colors } from "@/src/app/index/colors"
import { LucideIcon } from "lucide-react-native"
import { TextInput, View } from "react-native"
import { styles } from "../input/styles"

type InputProps = {
  placeHolder: string
  Icon: LucideIcon
}

export function Input({ placeHolder, Icon }: InputProps) {
  return (
    <View style={styles.container}>
      <Icon size={20} color={colors.gray[400]} />
      <TextInput placeholder={placeHolder} style={styles.input} />
    </View>
  )
}
