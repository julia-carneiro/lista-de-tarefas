import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #DBDBDB;
    border-radius: 14px;
    overflow: hidden;
    margin-top: 10px;
`;

export const TaskText = styled.Text`
    color: #2D2D2D;
    font-size: 16px;
    font-weight: 500;
`;

export const TaskDone = styled.TouchableOpacity`
    width: 56px;
    height: 50px;
    justify-content: center;
    align-items: center;
    
`;

export const TaskDelete = styled.TouchableOpacity`
    width: 56px;
    height: 50px;
    background-color: #979797;
    justify-content: center;
    align-items: center;
`;