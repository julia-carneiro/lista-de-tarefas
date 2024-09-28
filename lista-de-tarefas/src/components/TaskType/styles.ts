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
`;
