import { StyleSheet, TextInput } from "react-native";
import { View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //shadow for android
    shadowColor: "black", //shadow style for iOS
    shadowOffset: { width: 0, height: 2 }, //shadow style for iOS
    shadowRadius: 6, //shadow style for iOS
    shadowOpacity: 0.25, //shadow style for iOS
  },
});
