
import { PALETA } from "../../constants/paleta";
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Tela2() {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.tabela_geral}>
      <Text style={styles.titulo}>Ergane</Text>

      <View style={styles.produtos}>
        <Text>Variações</Text>
        <Text style={styles.botao}>Escolher Tipo ▼</Text>
      </View>

      <View style={styles.produtos}>
        <Text>Estoque</Text>
        <Text style={styles.botao}>Escolher Tipo ▼</Text>
      </View>

      <View style={styles.produtos}>
        <Text>Preço</Text>
        <TextInput
          style={styles.botao}
          onChangeText={setTexto}
          placeholder="R$0,00"
          keyboardType="numeric"
          value={texto}
        />
      </View>

      <View style={styles.produtos}>
        <Text>Frete</Text>
        <TextInput
          style={styles.botao}
          onChangeText={setTexto}
          placeholder="R$0,00"
          keyboardType="numeric"
          value={texto}
        />
      </View>

      <View style={styles.produtos}>
        <Text>Condicao</Text>
        <Text style={styles.botao}>Novo ▼</Text>
      </View>

      <View style={styles.linhaBotoes}>
        <TouchableOpacity style={[styles.botaoInferior, styles.botaoDireita]}>
          <Text style={styles.texto}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botaoInferior, styles.botaoEsquerda]}>
          <Text style={styles.texto}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabela_geral: {
    margin: 40,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },

  produtos: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 5,
    gap: 10,
  },

  botao: {
    borderWidth: 1,
  },

  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },

  botaoInferior: {
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  botaoEsquerda: {
    backgroundColor: PALETA.corNegativo,
    borderWidth: 1,
  },

  botaoDireita: {
    backgroundColor: PALETA.corPositivo,
    borderWidth: 1,
  },

  texto: {
    color: 'white',
  },
});