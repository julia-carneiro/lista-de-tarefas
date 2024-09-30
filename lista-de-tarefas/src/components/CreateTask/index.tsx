import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AddTask, Container, Text } from './styles';
import { Feather } from '@expo/vector-icons';

interface CreateTaskProps {
  onCreateTask: () => void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  return (
    <Container onPress={onCreateTask}>
      <Text>Criar Tarefa</Text>
        <AddTask onPress={onCreateTask}>
          <Feather name="plus" size={24} color="#33363F" />
        </AddTask>
    </Container>
  );
}
