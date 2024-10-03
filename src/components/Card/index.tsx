import React, { useState, useEffect } from 'react';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import { Container, Overlay, Card, InputTask, TextDescription, TextContainer, InputDescription, StyledButton, ButtonText } from './styles';
import RNPickerSelect from 'react-native-picker-select';

interface CardsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onCreateTask: (taskData: {  task: string; description: string; category: string; check: boolean; }) => void;
}

const items = [
  { label: 'Estudos', value: 'Estudos', backgroundColor: '#FFF6A2' },
  { label: 'Trabalho', value: 'Trabalho', backgroundColor: '#FFA2A2' },
  { label: 'Pessoal', value: 'Pessoal', backgroundColor: '#B4F67F' },
];

export function Cards({ modalVisible, setModalVisible, onCreateTask }: CardsProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (modalVisible) {
      setTask('');
      setDescription('');
      setSelectedValue(null);
    }
  }, [modalVisible]);

  const handleCreate = () => {
    if (task && selectedValue) {
      onCreateTask({ task, description, category: selectedValue, check: false });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <Container>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <Overlay>
            <TouchableWithoutFeedback>
              <Card>
                <TextContainer>
                  <TextDescription>Título</TextDescription>
                </TextContainer>
                <InputTask 
                  placeholder="Digite sua tarefa" 
                  value={task}
                  onChangeText={setTask} 
                />
                <View style={{ width: '100%', borderRadius: 14 }}>
                  <View style={{
                    borderRadius: 14,
                    overflow: 'hidden',
                    backgroundColor: items.find(item => item.value === selectedValue)?.backgroundColor || '#f0f0f0',
                  }}>
                    <RNPickerSelect
                      onValueChange={(value) => setSelectedValue(value)}
                      items={items}
                      placeholder={{
                        label: 'Selecione uma categoria...',
                        value: null
                      }}
                    />
                  </View>
                </View>
                <TextContainer>
                  <TextDescription>Descrição</TextDescription>
                </TextContainer>
                <InputDescription
                  placeholder="Digite a descrição" 
                  value={description}
                  onChangeText={setDescription} 
                />
                <StyledButton onPress={handleCreate}>
                  <ButtonText>Criar Tarefa</ButtonText>
                </StyledButton>
              </Card>
            </TouchableWithoutFeedback>
          </Overlay>
        </TouchableWithoutFeedback>
      </Modal>
    </Container>
  );
}
