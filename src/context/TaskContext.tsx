import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a interface Task representando as propriedades de uma tarefa
interface Task {
  task: string;        // Nome da tarefa
  description: string; // Descrição da tarefa
  category: string;    // Categoria da tarefa
  check: boolean;      // Status de conclusão da tarefa
}

// Define o tipo de contexto para gerenciamento de tarefas
interface TaskContextType {
  tasks: Task[];                          // Array de tarefas
  addTask: (task: Task) => Promise<void>; 
  deleteTask: (taskToDelete: string) => Promise<void>;  
  checkTask: (taskToCheck: string) => Promise<void>;    
}

// Cria um contexto com valor inicial undefined
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Componente TaskProvider para fornecer o contexto de tarefas aos filhos
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]); // Estado para armazenar as tarefas

  // Carrega as tarefas do AsyncStorage na renderização inicial
  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks'); // Obtém as tarefas armazenadas
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks)); // Faz o parse e define as tarefas
      }
    };

    loadTasks(); // Chama a função loadTasks
  }, []);

  // Salva as tarefas no AsyncStorage sempre que o estado de tarefas muda
  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks)); // Armazena as tarefas
    };

    saveTasks(); // Chama a função saveTasks
  }, [tasks]);

  // Função para adicionar uma nova tarefa
  const addTask = async (task: Task) => {
    setTasks(prevTasks => [task, ...prevTasks]); // Adiciona a nova tarefa ao estado
  };

  // Função para deletar uma tarefa específica
  const deleteTask = async (taskToDelete: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.task !== taskToDelete)); // Filtra a tarefa deletada
  };

  // Função para alternar o status de conclusão de uma tarefa específica
  const checkTask = async (taskToCheck: string) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.task === taskToCheck ? { ...task, check: !task.check } : task // Alterna o status de check
      );
      return updatedTasks.sort((a, b) => Number(a.check) - Number(b.check)); // Ordena as tarefas pelo status de conclusão
    });
  };

  // Fornece as tarefas e as funções de gerenciamento para os filhos
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, checkTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook personalizado para usar o TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext); // Obtém o valor do contexto
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider'); // Erro se usado fora do provider
  }
  return context; // Retorna o contexto
};
