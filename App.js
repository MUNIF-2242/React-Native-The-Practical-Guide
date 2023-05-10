import { StyleSheet, Text, View } from 'react-native'

import SignUp from './screens/SignUp'

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})
