import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from './src/components/Task';
import { CreateTask } from './src/components/CreateTask';
import TaskButtons from './src/components/TaskType';
import { Cards } from './src/components/Card';

export default function App() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean; task: string; category: string }[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('estudos'); // Inicializa com uma categoria

  const handleCreateTask = () => {
    setModalVisible(true); 
  };

  const handleAddTask = (taskData: { task: string; description: string; category: string; check: boolean }) => {
    setTasks(prevTasks => [
      {
        task: taskData.task,
        description: taskData.description,
        check: false, // Tarefas criadas começam como não concluídas
        category: taskData.category,
      },
      ...prevTasks,
    ]);
    setSelectedCategory(taskData.category); // Define a categoria da nova tarefa
    setModalVisible(false); // Fecha o modal após adicionar a tarefa
  };

  const handleDeleteTask = (taskToDelete: string) => {
    Alert.alert(
      "Atenção!",
      `Deseja realmente remover a tarefa ${taskToDelete}?`,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            setTasks(prevTasks => prevTasks.filter(task => task.task !== taskToDelete));
          },
        },
      ],
      { cancelable: false } // opcional, se você quiser que o alerta não possa ser fechado ao clicar fora
    );
  };

  const handleCheckTask = (taskToCheck: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.task === taskToCheck
          ? { ...task, check: !task.check } // Alterna o estado do check
          : task
      ).sort((a, b) => Number(a.check) - Number(b.check)) // Ordena, colocando os checked no final
    );
  };

  return (
    <View style={styles.container}>
      <CreateTask onCreateTask={handleCreateTask} />
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <TaskButtons setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      </View>
      <StatusBar style="auto" />
      <FlatList
        data={tasks.filter(task => 
          selectedCategory ? task.category === selectedCategory : true
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Task 
            task={item.task} 
            description={item.description} 
            category={item.category} 
            check={item.check} // Passa o estado de check
            onCheck={() => handleCheckTask(item.task)} // Lida com a marcação da tarefa
            onDelete={() => handleDeleteTask(item.task)} // Lida com a exclusão da tarefa
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
