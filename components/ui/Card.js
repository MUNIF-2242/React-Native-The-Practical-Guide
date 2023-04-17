import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary600,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //shadow for android
    shadowColor: "black", //shadow style for iOS
    shadowOffset: { width: 0, height: 2 }, //shadow style for iOS
    shadowRadius: 6, //shadow style for iOS
    shadowOpacity: 0.25, //shadow style for iOS
  },
});
