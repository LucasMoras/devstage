import { router } from "expo-router"
import { ArrowRight, Mail, Radio, User } from "lucide-react-native"
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { Input } from "../../components/input"
import { colors } from "../colors"

export default function Index() {
  function trocaPagina() {
    router.push("/proximaTela/Tela02")
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/Background.png")}
    >
      <View>
        <View style={styles.title}>
          <Image
            style={styles.logo}
            source={require("../../assets/Logo.png")}
          />
          <Text style={styles.codeCraft}>CodeCraft</Text>
          <Text style={styles.summit}>Summit 2025</Text>
        </View>
        <View style={styles.sobre}>
          <View style={styles.titulosSobre}>
            <Text style={styles.tituloSobre}>Sobre o evento</Text>
            <View style={styles.ViewAoVivo}>
              <Radio color={colors.purple[300]} size={18} />
              <Text style={styles.tituloAoVivo}>AO VIVO</Text>
            </View>
          </View>
          <Text style={styles.conteudoSobre}>
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
          </Text>
          <Text style={styles.dataSobre}>
            Dias 15 a 17 de março | Das 18h às 21h
          </Text>
        </View>
        <View style={styles.inscricao}>
          <Text style={styles.inscricaoTitulo}>Inscrição</Text>
          <Input placeHolder="Nome completo" Icon={User} />
          <Input placeHolder="E-mail" Icon={Mail} />
          <TouchableOpacity style={styles.button} onPress={trocaPagina}>
            <View style={styles.textoButton}>
              <Text style={styles.confirmar}>Confirmar</Text>
              <ArrowRight size={20} color={colors.blue[300]} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  confirmar: {
    color: colors.blue[300],
    fontWeight: "500",
  },
  ViewAoVivo: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    height: 48,
    width: 295,
    backgroundColor: colors.gray[500],
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  textoButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  inscricao: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: colors.gray[700],
    width: 343,
    height: 272,
  },
  inscricaoTitulo: {
    color: colors.gray[200],
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 24,
  },
  tituloAoVivo: {
    fontSize: 12,
    color: colors.purple[300],
    fontWeight: "500",
  },
  titulosSobre: {
    flexDirection: "row",
  },
  background: {
    width: 375,
    height: "100%",
    padding: 16,
    paddingTop: 32,
  },
  logo: {
    marginBottom: 20,
    width: 86.8,
    height: 24,
  },
  title: {
    marginBottom: 40,
    height: 130,
    width: 343,
    alignItems: "center",
    justifyContent: "center",
  },
  codeCraft: {
    color: colors.blue[300],
    fontWeight: "600",
    fontSize: 32,
  },
  summit: {
    color: colors.gray[100],
    fontSize: 32,
    fontWeight: "600",
  },
  sobre: {
    padding: 26,
    height: 322,
    width: 343,
    backgroundColor: colors.gray[700],
    borderRadius: 16,
    marginBottom: 16,
  },
  tituloSobre: {
    color: colors.gray[200],
    marginBottom: 24,
    fontSize: 18,
    flex: 1,
    fontWeight: "500",
  },
  conteudoSobre: {
    color: colors.gray[300],
    marginBottom: 16,
    lineHeight: 24,
  },
  dataSobre: {
    color: colors.gray[300],
  },
})
