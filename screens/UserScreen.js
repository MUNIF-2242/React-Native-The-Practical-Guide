import { Button, Text, View, StyleSheet } from "react-native";

function UserScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.container}>
      <Text>User Screen..</Text>
      <Button onPress={openDrawerHandler} title="Open Drawer" />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
