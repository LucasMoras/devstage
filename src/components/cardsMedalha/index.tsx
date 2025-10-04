import { ImageSourcePropType, Text, View } from "react-native";
import { Image } from "react-native";
import {styles} from './styles';

type CardsMedalhaProps ={
    posicoes: string
    pontos: string
    medalha: ImageSourcePropType
}

export function CardsMedalha({medalha, pontos, posicoes}: CardsMedalhaProps){
    return(
    <View style={styles.contaier}>
        <Image source={medalha} style={styles.medalha}/>
        <Text style={styles.posicoes}>{posicoes}</Text>
        <Text style={styles.pontos}>{pontos}</Text>
    </View>
    )
}