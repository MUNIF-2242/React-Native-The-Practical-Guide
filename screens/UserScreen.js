import { Button, Text } from "react-native";

function UserScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <>
      <Text>User Screen</Text>
      <Button onPress={openDrawerHandler} title="Open Drawer" />
    </>
  );
}

export default UserScreen;
