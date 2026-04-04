import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { PALETA } from "../../constants/paleta";

export default function Tela3() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Ergane</Text>
      <Text style={styles.subtitle}>Acesse sua conta</Text>

      <TextInput
        placeholder="Usuário / Email"
        placeholderTextColor={PALETA.cinzaClaro}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor={PALETA.cinzaClaro}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Esqueceu a senha?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETA.branco,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: PALETA.verdeEsmeralda,
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: PALETA.cinzaEscuro,
    textAlign: "center",
    marginBottom: 32,
  },

  input: {
    backgroundColor: PALETA.cinzaMuitoClaro,
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
    color: PALETA.preto,
  },

  button: {
    backgroundColor: PALETA.verdeEsmeralda,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: PALETA.branco,
    fontSize: 16,
    fontWeight: "bold",
  },

  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: PALETA.cinzaMedio,
  },
});