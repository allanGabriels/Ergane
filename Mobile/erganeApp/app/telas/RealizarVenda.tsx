import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PALETA } from "../../constants/paleta";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tela1() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topBar}>
          <Text style={styles.brandText}>Ergane</Text>
          <View style={styles.statusPill}>
            <Text style={styles.statusPillText}>Venda ativa</Text>
          </View>
        </View>

        <Text style={styles.title}>Confirmar Venda</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Itens do pedido</Text>

          <View style={styles.itemRow}>
            <Text style={styles.itemText}>1x Coxinha</Text>
            <Text style={styles.itemText}>R$ 7,00</Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemText}>2x Suco</Text>
            <Text style={styles.itemText}>R$ 12,00</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Resumo</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>R$ 19,00</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Taxa</Text>
            <Text style={styles.summaryValue}>R$ 2,00</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>R$ 21,00</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Pagamento</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.paymentText}>Forma selecionada</Text>
            <Text style={styles.paymentValue}>Pix</Text>
          </View>

          <TouchableOpacity style={styles.selectPaymentButton}>
            <Text style={styles.selectPaymentButtonText}>
              Selecionar Pagameto
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Situacao do estoque</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.paymentText}>Coxinha</Text>
            <Text style={styles.stockOk}>Disponivel: 18</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.paymentText}>Suco</Text>
            <Text style={styles.stockAlert}>Baixo: 3</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.buttonFooter, styles.negative]}>
          <Text
            style={[styles.buttonFooterText, styles.buttonFooterTextNegative]}
          >
            Cancelar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonFooter, styles.positive]}>
          <Text
            style={[styles.buttonFooterText, styles.buttonFooterTextPositive]}
          >
            Concluir
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  content: {
    padding: 12,
    gap: 10,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  brandText: {
    fontSize: 18,
    fontWeight: "700",
    color: PALETA.corTexto,
  },

  statusPill: {
    backgroundColor: PALETA.corPositivo,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  statusPillText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: PALETA.corTexto,
    marginBottom: 4,
  },

  card: {
    borderWidth: 1,
    borderColor: "#e6dfda",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fffaf7",
    gap: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: PALETA.corTexto,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemText: {
    fontSize: 14,
    color: PALETA.corTexto,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  summaryLabel: {
    fontSize: 14,
    color: PALETA.corTexto,
  },

  summaryValue: {
    fontSize: 14,
    color: PALETA.corTexto,
  },

  separator: {
    height: 1,
    backgroundColor: "#e6dfda",
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: PALETA.corTexto,
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "800",
    color: PALETA.corPositivo,
  },

  paymentText: {
    fontSize: 14,
    color: PALETA.corTexto,
  },

  paymentValue: {
    fontSize: 14,
    fontWeight: "700",
    color: PALETA.corTexto,
  },

  selectPaymentButton: {
    marginTop: 2,
    backgroundColor: PALETA.corPositivo,
    borderRadius: 10,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },

  selectPaymentButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },

  stockOk: {
    fontSize: 14,
    fontWeight: "700",
    color: PALETA.corPositivo,
  },

  stockAlert: {
    fontSize: 14,
    fontWeight: "700",
    color: PALETA.corNegativo,
  },

  footer: {
    flexDirection: "row",
    marginHorizontal: 8,
    marginBottom: 8,
    gap: 8,
  },

  buttonFooter: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    width: "49%",
    height: 55,
    borderWidth: 2,
  },

  negative: {
    borderColor: PALETA.corNegativo,
    backgroundColor: "transparent",
  },

  positive: {
    backgroundColor: PALETA.corPositivo,
    borderColor: PALETA.corPositivo,
  },

  buttonFooterText: {
    fontSize: 18,
    fontWeight: "600",
  },

  buttonFooterTextNegative: {
    color: PALETA.corTexto,
  },

  buttonFooterTextPositive: {
    color: "#ffffff",
  },
});
