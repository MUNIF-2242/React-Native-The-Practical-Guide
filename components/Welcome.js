import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Welcome = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
