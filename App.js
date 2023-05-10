import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Welcome from './components/Welcome'

export default function App() {
  const name = ['Munif', 'Hasan', 'Pulok']
  return (
    <View style={styles.container}>
      {name.map((name) => (
        <Welcome name={name} />
      ))}

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 15,
    paddingHorizontal: 15,
  },
})
