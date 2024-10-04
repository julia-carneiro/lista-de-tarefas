import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fffff2;
    padding: 16px;
    padding-top: 64px;
    gap: 16px;
`
export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    aling-items: flex-start;
`

export const TopButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: start;
    aling-items: center;
    gap: 16px;
`

export const TopText = styled.Text`
    color: #2D2D2D;
    font-size: 16px;
`

export const TitleContainer = styled.View`
    border-radius: 14px;
    padding: 8px 16px;
`

export const Title = styled.Text`
    color: #2D2D2D;
    font-size: 40px;
    font-weight: 700;
`
export const Description = styled.Text`
  width: 100%; 
  height: 250px; 
  background-color: #f0f0f0;
  border-radius: 14px; 
  padding: 20px; 
  margin-top: 20px; 
  font-size: 20px; 
  color: #333; 
  
`;


interface TaskCategoryProps {
    category: 'Estudos' | 'Trabalho' | 'Pessoal';
}

export const TaskCategory = styled.TouchableOpacity<TaskCategoryProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ category }) => {
    switch (category) {
      case 'Estudos':
        return '#FFF6A2'; 
      case 'Trabalho':
        return '#FFA2A2'; 
      case 'Pessoal':
        return '#B4F67F'; 
      default:
        return '#DBDBDB'; 
    }
  }};
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
