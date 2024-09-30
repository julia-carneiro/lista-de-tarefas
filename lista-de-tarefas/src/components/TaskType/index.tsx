import React, { useState } from 'react';
import { TaskButton, Text } from './styles'; // Importa o botão estilizado

const TaskButtons = () => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  return (
    <>
      <TaskButton
        selected={selectedTask === 'study'}
        color="#FFF6A2"
        onPress={() => setSelectedTask('study')}
      >
        <Text>Estudos</Text>
      </TaskButton>

      <TaskButton
        selected={selectedTask === 'work'}
        color="#FFA2A2"
        onPress={() => setSelectedTask('work')}
      >
        <Text>Trabalho</Text>
      </TaskButton>

      <TaskButton
        selected={selectedTask === 'personal'}
        color="#B4F67F"
        onPress={() => setSelectedTask('personal')}
      >
        <Text>Pessoal</Text>
      </TaskButton>
    </>
  );
};

export default TaskButtons;
