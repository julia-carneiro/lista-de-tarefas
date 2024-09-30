import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
`;

export const Card = styled.View`
  width: 320px;
  height: 480px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

export const InputTask = styled.TextInput`
  width: 100%; 
  height: 60px; 
  background-color: #f0f0f0;
  border-radius: 8px; 
  padding: 10px; 
  margin-bottom: 20px; 
  font-size: 20px; 
  color: #333; 
`;

export const InputDescription = styled.TextInput`
  width: 100%; 
  height: 150px; 
  background-color: #f0f0f0;
  border-radius: 8px; 
  padding: 10px; 
  margin-bottom: 20px; 
  font-size: 20px; 
  color: #333; 
`;

export const TextContainer = styled.View`
    align-self: flex-start; /* Alinha ao canto superior esquerdo */
    margin-top: 20px;
    margin-bottom: 20px; /* Espaço abaixo do texto, se necessário */
`;

export const TextDescription = styled.Text`
    color: #33363F;
    font-size: 20px;
    font-weight: 700;
    margin-left: 3px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #B4F67F; 
  border-radius: 14px; 
  padding: 10px 20px; 
  align-items: center;
  justify-content: center; 
  margin-top: 10px; 
`;

export const ButtonText = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold; 
`;