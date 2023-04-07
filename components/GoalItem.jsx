import { StyleSheet, Text, View } from 'react-native'
function GoalItem({ goal }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
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
