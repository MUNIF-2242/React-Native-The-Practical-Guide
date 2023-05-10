import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserInput from '../components/auth/UserInput'
import CustomButton from '../components/common/CustomButton'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.textStyle}>SignUp</Text>
      <UserInput
        name='NAME'
        value={name}
        setValue={setName}
        autoCapitalize='words'
        autoCorrect={false}
      />
      <UserInput
        name='EMAIL'
        value={email}
        setValue={setEmail}
        keyboardType='email-address'
        autoComplete='email'
      />
      <UserInput
        name='PASSWORD'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  textWrapper: {
    marginVertical: 24,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
  },
})
