import { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString },
    ])
  }
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <Text>List of goals....</Text>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => <GoalItem goal={item.text} />}
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
  goalContainer: {
    marginTop: 20,
    flex: 3,
  },
})
