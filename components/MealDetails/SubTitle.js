import { View, Text, StyleSheet } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subtTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subtTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
