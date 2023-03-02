import React from "react";

import { View, TouchableOpacity, Image, Text } from "react-native";

import successImg from "../../assets/success.jpeg";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View>
      <Image style={styles.image} source={successImg} />
      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
