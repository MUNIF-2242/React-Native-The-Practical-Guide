import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllExpenses from "./screens/AllExpenses";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expense Tracker App</Text>
      <AllExpenses />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
