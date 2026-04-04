import React, { useEffect, useState } from "react";
import { View, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Tela1 from "./telas/RealizarVenda";
import Tela2 from "./telas/GerenciarProdutos";
import Tela3 from "./telas/RealizarAutenticacao";
import Tela4 from "./telas/ReceberPagamento";
import Tela5 from "./telas/Tela5";

//esse layout é apenas para facilitar a visualização dos protótipos, não tem relação com a estrutura final do app
//para navegar entre as telas, basta clicar nos números de 1 a 5 no teclado (funciona apenas no web)

type TelaAtiva = 1 | 2 | 3 | 4 | 5;

export default function RootLayout() {
  const [telaAtiva, setTelaAtiva] = useState<TelaAtiva>(1);

  useEffect(() => {
    if (Platform.OS !== "web") {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") setTelaAtiva(1);
      if (event.key === "2") setTelaAtiva(2);
      if (event.key === "3") setTelaAtiva(3);
      if (event.key === "4") setTelaAtiva(4);
      if (event.key === "5") setTelaAtiva(5);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const renderTela = () => {
    if (telaAtiva === 1) return <Tela1 />;
    if (telaAtiva === 2) return <Tela2 />;
    if (telaAtiva === 3) return <Tela3 />;
    if (telaAtiva === 4) return <Tela4 />;
    return <Tela5 />;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{renderTela()}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
