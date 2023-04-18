import { View, Pressable, Text } from "react-native";

function CategoryGridTitle({ title, color }) {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;
