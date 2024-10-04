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

  //Componente das categorias - cada botão corresponde a uma categoria.
  return (
    <>
      <TaskButton
        selected={selectedCategory === 'Estudos'}
        color="#FFF6A2"
        onPress={() => handleButtonPress('Estudos')}
      >
        <Text>Estudos</Text>
      </TaskButton>

      <TaskButton
        selected={selectedCategory === 'Trabalho'}
        color="#FFA2A2"
        onPress={() => handleButtonPress('Trabalho')}
      >
        <Text>Trabalho</Text>
      </TaskButton>

      <TaskButton
        selected={selectedCategory === 'Pessoal'}
        color="#B4F67F"
        onPress={() => handleButtonPress('Pessoal')}
      >
        <Text>Pessoal</Text>
      </TaskButton>
    </>
  );
};

export default TaskButtons;
