

import {
  View,
  Text,
  StyleSheet,  
  SafeAreaView,Image
} from "react-native";
import { PALETA } from "../../constants/paleta";

export default function Tela4() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        
        <View style={styles.topBar}>
          <Text style={styles.brandText}>Ergane</Text>
        </View>

        <Text style={styles.title}>Pagamento via Pix</Text>

        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Escaneie o QR Code</Text>
          <View style={styles.qr1}>
            <Image
  source={require("../../assets/images/qrcode.png")}
  style={styles.qr1}
/>
            
            
          </View>
          <Text style={styles.qr2}>
            Abra o app do seu banco e escaneie o código acima
          </Text>
        </View>

        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ou copie a chave</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.chavePix}>ergane@email.com</Text>
          </View>
        </View>

        
        <View style={styles.card}>
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>R$ 21,00</Text>
          </View>
        </View>

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

  
  qr1: {
    alignSelf: "center",
    width: 180,
    height: 180,
    borderWidth: 2,
    borderColor: "#e6dfda",
    borderRadius: 12,
    backgroundColor: "#f5f0ec",
    justifyContent: "center",
    alignItems: "center",
  },

  qr2: {
    fontSize: 12,
    color: "#8a7f7a",
    textAlign: "center",
  },


  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  chavePix: {
    fontSize: 14,
    color: "#1E1512",
    fontWeight: "600",
  },

  


  totalLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E1512",
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "800",
    color: PALETA.corPositivo,
  },

});