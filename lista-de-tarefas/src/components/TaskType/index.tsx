import React, { useState } from 'react';
import { TaskButton, Text } from './styles'; // Importa o botão estilizado

interface TaskButtonsProps {
  setSelectedCategory: (category: string) => void; // Adiciona a prop para definir a categoria
}

const TaskButtons = ({ setSelectedCategory }: TaskButtonsProps) => {
  const [selectedTask, setSelectedTask] = useState<string | null>("study");
  
  const handleButtonPress = (category: string) => {
    setSelectedTask(category);
    setSelectedCategory(category); // Atualiza a categoria selecionada
  };


  return (
    <>
      <TaskButton
        selected={selectedTask === 'estudos'}
        color="#FFF6A2"
        onPress={() => handleButtonPress('estudos')}
        
      >
        <Text>Estudos</Text>
      </TaskButton>

      <TaskButton
        selected={selectedTask === 'trabalho'}
        color="#FFA2A2"
        onPress={() => handleButtonPress('trabalho')}
      >
        <Text>Trabalho</Text>
      </TaskButton>

      <TaskButton
        selected={selectedTask === 'pessoal'}
        color="#B4F67F"
        onPress={() => handleButtonPress('pessoal')}
      >
        <Text>Pessoal</Text>
      </TaskButton>
    </>
  );
};

export default TaskButtons;
