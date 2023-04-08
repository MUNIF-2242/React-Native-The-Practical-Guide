import { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter your course goal here'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  input: {
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
    width: '80%',
  },
})
