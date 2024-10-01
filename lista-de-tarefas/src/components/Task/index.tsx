import React from 'react';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import { Feather } from '@expo/vector-icons';

interface TaskProps {
  task: string;
  description: string;
  category: string;
  check: boolean; // Prop para definir se a tarefa está concluída
  onCheck: () => void; // Função para alternar o estado de check
  onDelete: () => void; // Função para excluir a tarefa
}

export function Task({ task, description, category, check, onCheck, onDelete }: TaskProps) {
  return (
    <Container>
      <TaskDone onPress={onCheck} style={{backgroundColor: check ? '#CDFFB1' : '#B6B6B6', }}>
        <Feather name={check ? "check-circle" : "circle"} size={24} color="#33363F" />
      </TaskDone>
      <TaskText style={{
          textDecorationLine: check ? 'line-through' : 'none',
          color: check ? '#999' : '#333', 
        }}>
        {task}
      </TaskText>
      <TaskDelete onPress={onDelete} style={{backgroundColor: check ? '#F37878' : '#979797', }}>
        <Feather name="trash" size={24} color="white" />
      </TaskDelete>
    </Container>
  );
}
