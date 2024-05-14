import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDebounce, useTimer } from 'react-native-enhancer';

const App = () => {
  // State to track the total number of taps
  const [tapCount, setTapCount] = useState(0);

  // Example use of useDebounce hook to update tap count after a short delay
  const debouncedTapCountUpdate = useDebounce((count: number) => {
    // Update tap count after debounce delay
    setTapCount(count);
  }, 300); // Debounce delay of 300 milliseconds

  // Function to handle tap on the button and trigger debounced tap count update
  const handleTap = () => {
    // Increment tap count
    const newTapCount = tapCount + 1;
    // Trigger debounced tap count update
    debouncedTapCountUpdate(newTapCount);
  };

  // State to track the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Example use of useTimer hook to update current time every second
  useTimer(() => {
    setCurrentTime(new Date());
  }, 1000);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* Debounce Example */}
      <Text style={styles.heading}>useDebounce Hook</Text>
      <TouchableOpacity onPress={handleTap} style={styles.button}>
        <Text style={styles.buttonText}>Tap Me (Debounce)</Text>
      </TouchableOpacity>
      <Text style={styles.exampleText}>Total Taps: {tapCount}</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Timer Example */}
      <Text style={styles.heading}>useTimer Hook</Text>
      <Text style={styles.exampleText}>
        Current Time: {currentTime.toLocaleTimeString()}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Background color
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3', // Bluish tone
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  exampleText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
  },
  divider: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 20,
  },
});

export default App;
