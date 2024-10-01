import React from 'react';
import { TaskButton, Text } from './styles';

interface TaskButtonsProps {
  setSelectedCategory: (category: string) => void; // Prop para definir a categoria
  selectedCategory: string | null; // Adiciona a prop para saber qual categoria está selecionada
}

const TaskButtons = ({ setSelectedCategory, selectedCategory }: TaskButtonsProps) => {
  const handleButtonPress = (category: string) => {
    setSelectedCategory(category); // Atualiza a categoria selecionada
  };

  return (
    <>
      <TaskButton
        selected={selectedCategory === 'estudos'}
        color="#FFF6A2"
        onPress={() => handleButtonPress('estudos')}
      >
        <Text>Estudos</Text>
      </TaskButton>

      <TaskButton
        selected={selectedCategory === 'trabalho'}
        color="#FFA2A2"
        onPress={() => handleButtonPress('trabalho')}
      >
        <Text>Trabalho</Text>
      </TaskButton>

      <TaskButton
        selected={selectedCategory === 'pessoal'}
        color="#B4F67F"
        onPress={() => handleButtonPress('pessoal')}
      >
        <Text>Pessoal</Text>
      </TaskButton>
    </>
  );
};

export default TaskButtons;
