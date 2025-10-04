import { Cards } from "@/src/components/cards"
import { CardsMedalha } from "@/src/components/cardsMedalha"
import {
  BadgeCheck,
  Copy,
  Link,
  Medal,
  MousePointerClick,
} from "lucide-react-native"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import { colors } from "../colors"

export default function Tela02() {
  return (
    <ImageBackground
      source={require("../../assets/Background.png")}
      style={styles.fundo}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <View style={styles.bloco}>
          <Text style={styles.titulo01}>Inscrição confirmada!</Text>
          <Text style={styles.descricao}>
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.titulo02}>Indique e ganhe</Text>
          <Text style={styles.descricao}>
            Convide mais pessoas para o evento e concorra a prêmios exclusivos!
            É só compartilhar o link abaixo e acompanhar as inscrições:
          </Text>
        </View>
        <View style={styles.link}>
          <Link size={20} color={colors.gray[100]} />
          <Text style={styles.linkTexto}>devstage.com/codecraft-sum...</Text>
          <View style={styles.blocoCopy}>
            <Copy color={colors.blue[300]} size={20} />
          </View>
        </View>
        <View style={styles.cards}>
          <Cards
            Icon={MousePointerClick}
            Numero={"942"}
            subTitulo="Acessos ao link"
          />
          <Cards Icon={BadgeCheck} Numero={"875"} subTitulo="Acessos ao link" />
          <Cards Icon={Medal} Numero={"3º"} subTitulo="Acessos ao link" />
        </View>
      </View>
      <Text style={styles.titulo02}>Ranking de indicações</Text>
      <View style={styles.cardMedalha}>
      <CardsMedalha
        medalha={require("../../assets/Medal_1.png")}
        posicoes="1° | Lucas Moras"
        pontos="1.128"
      />
      <CardsMedalha
        medalha={require("../../assets/Medal_2.png")}
        posicoes="2° | Melissa Loures"
        pontos="928"
      />
      <CardsMedalha
        medalha={require("../../assets/Medal_3.png")}
        posicoes="3° | Rodrigo Gonçalves"
        pontos="875"
      />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  cardMedalha:{
    marginTop: 20,
    gap: 8
  },
  blocoCopy: {
    height: 32,
    width: 32,
    backgroundColor: colors.gray[500],
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    gap: 8,
    marginBottom: 40
  },
  linkTexto: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: "300",
  },
  link: {
    backgroundColor: colors.gray[800],
    height: 48,
    width: "100%",
    borderRadius: 10,
    borderColor: colors.gray[600],
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
  },
  bloco: {
    gap: 12,
    marginBottom: 20,
  },
  fundo: {
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
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  descricao: {
    color: colors.gray[300],
    lineHeight: 24,
  },
  titulo01: {
    fontSize: 24,
    color: colors.gray[200],
    fontWeight: "500",
  },
  titulo02: {
    fontSize: 20,
    color: colors.gray[200],
    fontWeight: "500",
  },
})
