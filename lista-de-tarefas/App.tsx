import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from './src/components/Task';
import { CreateTask } from './src/components/CreateTask';

export default function App() {

  useEffect(() => {
    console.error('ixi')
  },[]);

  return (
    <View style={styles.container}>
      <CreateTask/>
      <Task />
      <Task />
      <Task />
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
});
