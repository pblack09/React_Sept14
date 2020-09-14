import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



function App() {

  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={decrease}>
        <View style={styles.button, {backgroundColor: '#FF7B7B'}}>
          <Text style={styles.counter}>-</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.counter}>{counter}</Text>
      <TouchableOpacity
        onPress={increase}>
        <View style={styles.button, {backgroundColor: '#7BFF83'}}>
          <Text style={styles.counter}>+</Text>
        </View>
      </TouchableOpacity>
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
    justifyContent: 'center',
  },
  counter: {
    fontSize: 50,
    marginHorizontal: 30,
  },
  button: {
    paddingHorizontal: 8,
  },
});

export default App;
