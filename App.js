import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



function App() {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="+"
        onPress={() => setCounter(counter + 1)} />
      <Text style={styles.counter}>{counter}</Text>
      <Button
        style={styles.button}
        title="-"
        onPress={() => setCounter(counter - 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  counter: {
    fontSize: 30,
  },
});

export default App;
