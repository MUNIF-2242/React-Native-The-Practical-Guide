import { StyleSheet } from 'react-native'

import StartGameScreen from './screens/StartGameScreen'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient colors={['#44102a', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
})
