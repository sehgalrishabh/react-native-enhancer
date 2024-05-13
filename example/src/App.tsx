import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDebounce } from 'react-native-enhancer';

export default function App() {
  const debouncedAction = useDebounce(() => {
    // your logic goes here
    console.log('this will run after given time');
  }, 1000);

  debouncedAction();
  return (
    <View style={styles.container}>
      <Text>Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
