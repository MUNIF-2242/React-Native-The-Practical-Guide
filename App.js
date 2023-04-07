import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from 'react-native'

const Item = ({ goal }) => (
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{goal}</Text>
  </View>
)

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString },
    ])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter your course goal here...'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <Text numberOfLines={5}>List of goals....</Text>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => <Item goal={item.text} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalContainer: {
    marginTop: 20,
    flex: 3,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
})
