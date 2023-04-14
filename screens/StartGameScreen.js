import { Alert, StyleSheet, TextInput } from 'react-native'
import { View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Ok',
            onPress: resetInputHandler,
            style: 'destructive',
          },
        ]
      )
    }

    onPickedNumber(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        textAlign='center'
        inputMode='numeric'
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary600,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //shadow for android
    shadowColor: 'black', //shadow style for iOS
    shadowOffset: { width: 0, height: 2 }, //shadow style for iOS
    shadowRadius: 6, //shadow style for iOS
    shadowOpacity: 0.25, //shadow style for iOS
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
