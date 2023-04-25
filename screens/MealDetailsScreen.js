import { View, Text, StyleSheet } from "react-native";

function MealsDetailsScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text style={styles.title}>{mealId}</Text>
    </View>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
