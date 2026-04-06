import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { COR_TEXTO_CLARO, PALETA } from "../../constants/paleta";

export default function App() {
  const [text, onChangeText] = useState("");
  const corTexto = PALETA.corTexto;
  const corPrimaria = PALETA.verdeEsmeralda;
  const corSecundaria = PALETA.verdeFolha;

  const [produtos] = useState([
    {
      id: 1,
      nome: "Camiseta",
      preco: 49.9,
      status: "Disponível",
      imagem:
        "https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png",
    },
    {
      id: 2,
      nome: "Tênis",
      preco: 199.9,
      status: "Indisponível",
      imagem:
        "https://tse3.mm.bing.net/th/id/OIP.uWIqInliApKGVUx41E8wFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      nome: "Boné",
      preco: 39.9,
      status: "Disponível",
      imagem:
        "https://th.bing.com/th/id/OIP.sqMxlhEqbTnztfiuXofDyAHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ]);

  function show() {
    console.log("Buscar:", text);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: corTexto, padding: 10, fontWeight: "bold" }}>
        Buscar Produto:
      </Text>

      <View style={styles.containerBuscarProduto}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome ou palavra-chave..."
          placeholderTextColor={corTexto}
          onChangeText={onChangeText}
          value={text}
        />

        <View style={styles.pickerCategoria}>
          <Picker>
            <Picker.Item label="Categoria:" value="" />
            <Picker.Item label="Produto A" value="A" />
            <Picker.Item label="Produto B" value="B" />
          </Picker>
        </View>

        <View style={styles.pickerStatus}>
          <Picker>
            <Picker.Item label="Status:" value="" />
            <Picker.Item label="Disponível" value="disponivel" />
            <Picker.Item label="Esgotado" value="esgotado" />
            <Picker.Item label="Indisponível" value="Indisponível" />
          </Picker>
        </View>

        <View style={styles.botaoBuscarProduto}>
          <Button title="BUSCAR" color={corPrimaria} onPress={show} />
        </View>
      </View>

      <Text style={{ color: corTexto, padding: 10, fontWeight: "bold" }}>
        Resultado da Busca:
      </Text>

      <View style={styles.containerResultadoDaBusca}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: corSecundaria,
            paddingVertical: 8,
            backgroundColor: corSecundaria,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Text style={{ width: 40 }}></Text>

          <Text
            style={{
              flex: 2,
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            NOME
          </Text>

          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            PREÇO
          </Text>

          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            STATUS
          </Text>
        </View>

        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                borderBottomWidth: 1,
              }}
            >
              <Image
                source={{ uri: item.imagem }}
                style={{ width: 40, height: 40 }}
              />

              <Text style={{ flex: 2, marginLeft: 10 }}>{item.nome}</Text>

              <Text style={{ flex: 1, color: corPrimaria }}>
                R$ {item.preco}
              </Text>

              <Text style={{ flex: 1 }}>{item.status}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COR_TEXTO_CLARO,
    padding: 12,
  },

  containerBuscarProduto: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderRadius: 12,
    backgroundColor: COR_TEXTO_CLARO,
    borderWidth: 1,
    borderColor: PALETA.corTexto,
    elevation: 3,
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: PALETA.corTexto,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: COR_TEXTO_CLARO,
    color: PALETA.corTexto,
  },

  pickerCategoria: {
    flex: 1,
    borderWidth: 2,
    borderColor: PALETA.corTexto,
    borderRadius: 12,
    backgroundColor: COR_TEXTO_CLARO,
    overflow: "hidden",
  },

  pickerStatus: {
    flex: 1,
    borderWidth: 2,
    borderColor: PALETA.corTexto,
    borderRadius: 12,
    backgroundColor: COR_TEXTO_CLARO,
    overflow: "hidden",
  },

  botaoBuscarProduto: {
    borderRadius: 12,
    overflow: "hidden",
  },

  containerResultadoDaBusca: {
    flex: 1,
    marginTop: 10,
    backgroundColor: COR_TEXTO_CLARO,
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: PALETA.corTexto,
    elevation: 2,
  },
});
