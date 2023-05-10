import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize = 'none',
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.userInputWrapper}>
      <Text>{name}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.textInputStyle}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({
  userInputWrapper: {
    marginHorizontal: 24,
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    marginBottom: 24,
    height: 48,
  },
})
