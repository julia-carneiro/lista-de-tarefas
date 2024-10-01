// src/context/TaskContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
  task: string;
  description: string;
  category: string;
  check: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => Promise<void>;
  deleteTask: (taskToDelete: string) => Promise<void>;
  checkTask: (taskToCheck: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    };

    saveTasks();
  }, [tasks]);

  const addTask = async (task: Task) => {
    setTasks(prevTasks => [task, ...prevTasks]);
  };

  const deleteTask = async (taskToDelete: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.task !== taskToDelete));
  };

  const checkTask = async (taskToCheck: string) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.task === taskToCheck ? { ...task, check: !task.check } : task
      );
      return updatedTasks.sort((a, b) => Number(a.check) - Number(b.check));
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, checkTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
