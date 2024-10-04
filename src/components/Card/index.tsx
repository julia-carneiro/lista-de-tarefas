import React, { useEffect } from 'react';
import { Modal, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Container, Overlay, Card, InputTask, TextDescription, TextContainer, InputDescription, StyledButton, ButtonText, ErrorText } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface CardsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onCreateTask: (taskData: { task: string; description: string; category: string; check: boolean; }) => void;
}

const items = [
  { label: 'Estudos', value: 'Estudos', backgroundColor: '#FFF6A2' },
  { label: 'Trabalho', value: 'Trabalho', backgroundColor: '#FFA2A2' },
  { label: 'Pessoal', value: 'Pessoal', backgroundColor: '#B4F67F' },
];

// Validação do Yup
const validationSchema = Yup.object().shape({
  task: Yup.string().required('O título é obrigatório.'),
  description: Yup.string(),
  category: Yup.string().required('A categoria é obrigatória.'),
});

export function Cards({ modalVisible, setModalVisible, onCreateTask }: CardsProps) {

  const handleCreate = (values: { task: string; description: string; category: string; }) => {
    onCreateTask({ ...values, check: false });
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
                <Formik
                  initialValues={{ task: '', description: '', category: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleCreate}
                >
                  {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                      <TextContainer>
                        <TextDescription>Título</TextDescription>
                        {errors.task && touched.task && (
                        <ErrorText>{errors.task}</ErrorText>
                        )}
                      </TextContainer>
                      
                      <InputTask
                        placeholder="Digite sua tarefa"
                        onChangeText={handleChange('task')}
                        onBlur={handleBlur('task')}
                        value={values.task}
                      />

                      <View style={{ width: '100%', borderRadius: 14 }}>
                        {errors.category && touched.category && (
                          <ErrorText>{errors.category}</ErrorText>
                        )} 
                        <View style={{
                          borderRadius: 14,
                          overflow: 'hidden',
                          backgroundColor: items.find(item => item.value === values.category)?.backgroundColor || '#f0f0f0',
                        }}>
                          <RNPickerSelect
                            onValueChange={handleChange('category')}
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
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                      />
                      
                      <StyledButton onPress={() => { handleSubmit(); }}>
                        <ButtonText>Criar Tarefa</ButtonText>
                      </StyledButton>
                    </>
                  )}
                </Formik>
              </Card>
            </TouchableWithoutFeedback>
          </Overlay>
        </TouchableWithoutFeedback>
      </Modal>
    </Container>
  );
}

