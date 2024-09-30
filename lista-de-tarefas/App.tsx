import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from './src/components/Task';
import { CreateTask } from './src/components/CreateTask';
import TaskButtons from './src/components/TaskType';
import { Cards } from './src/components/Card';

export default function App() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean; task: string; category: string }[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateTask = () => {
    setModalVisible(true); 
  };

  const handleAddTask = (taskData: { task: string; description: string; category: string }) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        task: taskData.task,
        description: taskData.description,
        check: false, // Inicialmente, a tarefa não está marcada como concluída
        category: taskData.category,
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <CreateTask onCreateTask={handleCreateTask} />
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <TaskButtons />
      </View>
      <StatusBar style="auto" />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <Task 
                task={item.task} 
                description={item.description} 
                category={item.category} 
            />
        )}
        ListEmptyComponent={() => (
            <View>
                <Text>Nenhuma tarefa cadastrada</Text>
            </View>
        )}
      />

      {/* Cards que controla o modal */}
      <Cards modalVisible={modalVisible} setModalVisible={setModalVisible} onCreateTask={handleAddTask} />
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
    paddingTop: 80,
    gap: 16,
  },
});
