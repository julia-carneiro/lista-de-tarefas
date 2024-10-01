import React from 'react';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import { Feather } from '@expo/vector-icons';
import { useTaskContext } from '../../context/TaskContext';



interface TaskProps {
  task: string;
  description: string;
  category: string;
  check: boolean; // Prop para definir se a tarefa está concluída
}

export function Task({ task, description, category, check }: TaskProps) {
  const { deleteTask, checkTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(task);
  };

  const handleCheck = () => {
    checkTask(task);
  };

  return (
    <Container>
      <TaskDone onPress={handleCheck} style={{ backgroundColor: check ? '#CDFFB1' : '#B6B6B6' }}>
        <Feather name={check ? "check-circle" : "circle"} size={24} color="#33363F" />
      </TaskDone>
      <TaskText style={{
          textDecorationLine: check ? 'line-through' : 'none',
          color: check ? '#999' : '#333',
        }}>
        {task}
      </TaskText>
      <TaskDelete onPress={handleDelete} style={{ backgroundColor: check ? '#F37878' : '#979797' }}>
        <Feather name="trash" size={24} color="white" />
      </TaskDelete>
    </Container>
  );
}
