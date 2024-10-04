import React, { useState } from 'react';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import { Feather } from '@expo/vector-icons';
import { useTaskContext } from '../../context/TaskContext';
import { TasksProps, RootStackParamList } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task({ task, description, category, check }: TasksProps) {
  
  const { deleteTask, checkTask } = useTaskContext(); //Funções de deletar e checar tarefa
  const [] = useState<TasksProps>({ task, description, category, check }); 
  const navigation = useNavigation<Props['navigation']>(); 
  
  const handlePress = () => { //Navegação para pagina de detalhes
    navigation.navigate('Details', { task, description, category, check}); 
  };

  const handleDelete = () => { 
    deleteTask(task);
  };

  const handleCheck = () => {
    checkTask(task);
  };


  return (
    <Container onPress={() => handlePress()}>
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
