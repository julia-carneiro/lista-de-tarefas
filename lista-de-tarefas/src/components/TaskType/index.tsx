import React, { useState } from 'react';
import { Text } from 'react-native';
import { TaskButton } from './styles'; // Importa o botão estilizado

const TaskButtons = () => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  return (
    <>
      <TaskButton
        selected={selectedTask === 'study'}
        color="#FFF6A2"
        onPress={() => setSelectedTask('study')}
      >
        <Text>Study</Text>
      </TaskButton>

      <TaskButton
        selected={selectedTask === 'work'}
        color="#FFA2A2"
        onPress={() => setSelectedTask('work')}
      >
        <Text>Work</Text>
      </TaskButton>

      <TaskButton
        selected={selectedTask === 'personal'}
        color="#B4F67F"
        onPress={() => setSelectedTask('personal')}
      >
        <Text>Personal</Text>
      </TaskButton>
    </>
  );
};

export default TaskButtons;
