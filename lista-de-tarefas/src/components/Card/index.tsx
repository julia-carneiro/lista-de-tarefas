import React, { useState, useEffect } from 'react';
import { Text, Modal, View, TouchableWithoutFeedback } from 'react-native';
import { Container, Overlay, Card } from './styles';
import RNPickerSelect from 'react-native-picker-select';

interface CardsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const items = [
  { label: 'Estudos', value: 'estudos', backgroundColor: '#FFF6A2' }, // Cor para "Estudos"
  { label: 'Trabalho', value: 'trabalho', backgroundColor: '#FFA2A2' }, // Cor para "Trabalho"
  { label: 'Pessoal', value: 'pessoal', backgroundColor: '#B4F67F' }, // Cor para "Pessoal"
];

export function Cards({ modalVisible, setModalVisible }: CardsProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  // Reseta o selectedValue quando o modal é aberto
  useEffect(() => {
    if (modalVisible) {
      setSelectedValue(null); 
    }
  }, [modalVisible]);

  // Função para obter a cor correspondente ao valor selecionado
  const getPickerColor = () => {
    const selectedItem = items.find(item => item.value === selectedValue);
    return selectedItem ? selectedItem.backgroundColor : '#f0f0f0'; // Cor padrão
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
                <View style={{ 
                  width: '100%', 
                  borderRadius: 14
                }}>
                  <View
                    style={{
                      borderRadius: 14,
                      overflow: 'hidden',
                      backgroundColor: getPickerColor(), // Muda a cor de fundo baseado na seleção
                    }}
                  >
                    {/*Dropdown da categoria*/}
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
              </Card>
            </TouchableWithoutFeedback>
          </Overlay>
        </TouchableWithoutFeedback>
      </Modal>
    </Container>
  );
}
