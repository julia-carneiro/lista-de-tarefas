import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #DBDBDC;
    border-radius: 14px;
    overflow: hidden;
`;

export const AddTask = styled.TouchableOpacity`
    width: 56px;
    height: 50px;
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text`
    color: #33363F;
    font-size: 20px;
    font-weight: 700;
    flex: 1;
    padding: 10px;

`