import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../components/Task';
import { CreateTask } from '../../components/CreateTask';
import TaskButtons from '../../components/TaskType';
import { Cards } from '../../components/Card';
import { TaskProvider, useTaskContext } from '../../context/TaskContext';

// Componente principal que envolve a aplicação em TaskProvider
export default function Home() {
  return (
    <TaskProvider>
      <MainPage />
    </TaskProvider>
  );
}

function MainPage() {
  const { tasks, addTask } = useTaskContext(); // Obtém tarefas e função para adicionar
  const [modalVisible, setModalVisible] = useState(false); // Estado para visibilidade do modal
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Estudos'); // Inicializa com uma categoria

  const handleCreateTask = () => {
    setModalVisible(true);
  };

  // Lida com a criação de uma nova tarefa
  const handleAddTask = (taskData: { task: string; description: string; category: string; check: boolean }) => {
    addTask({
      task: taskData.task,
      description: taskData.description,
      check: false, // Tarefas criadas começam como não concluídas
      category: taskData.category,
    });
    setSelectedCategory(taskData.category); // Define a categoria da nova tarefa
    setModalVisible(false); // Fecha o modal após adicionar a tarefa
  };

  return (
    <View style={styles.container}>
      <CreateTask onCreateTask={handleCreateTask} /> 
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <TaskButtons setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      </View>
      <StatusBar style="auto" />
      <FlatList
        data={tasks.filter(task => selectedCategory ? task.category === selectedCategory : true)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Task 
            task={item.task} 
            description={item.description} 
            category={item.category} 
            check={item.check} // Passa o estado de check
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>Nenhuma tarefa cadastrada</Text>
          </View>
        )}
      />

      {/* Cards que controla o modal */}
      <Cards 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        onCreateTask={handleAddTask} 
        existingTasks={tasks.map(task => task.task)} // Passando os nomes das tarefas existentes
      />
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
