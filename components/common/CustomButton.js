import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'green',
        height: 50,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
      }}
    >
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 18,
          letterSpacing: 5,
        }}
      >
        SUBMIT
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
