import styled from 'styled-components/native';

interface TaskButtonProps {
  selected: boolean;
  color: string;
}

export const TaskButton = styled.TouchableOpacity<TaskButtonProps>`
  width: 110px;
  height: 40px;
  background-color: ${({ selected, color }) => (selected ? color : '#DBDBDB')}; 
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
  
`;

export const Text = styled.Text`
    color: #33363F;
    font-size: 16px;
    font-weight: 700;
`