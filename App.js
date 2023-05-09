import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}></View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //TOP LEFT

    //CENTER LEFT
    // justifyContent: 'center',

    //BOTTOM LEFT
    // justifyContent: 'flex-end',

    //TOP RIGHT
    // alignItems: 'flex-end',

    //CENTER RIGHT
    // alignItems: 'flex-end',
    // justifyContent: 'center',

    //BOTTOM RIGHT
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
  innerContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
})
