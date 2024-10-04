import React from 'react';
import { Container, Description, TaskCategory, Title, TitleContainer, TopButton, TopContainer, TopText } from './styles';
import { Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList>;

// Tela de detalhes - acontece quando uma tarefa é clicada
export default function Details({ route }: any) {
    const { task, description, category } = route.params;
    
    const navigation = useNavigation<Props['navigation']>();

    return (
        <Container>
            <TopContainer>
                <TopButton onPress={() => navigation.popToTop()}>
                    <Feather name="chevron-left" size={24} color="black"/>
                    <TopText>Voltar</TopText>
                </TopButton>
            </TopContainer>
            <TitleContainer>
                <Title>{task}</Title>
                <TaskCategory category={category}>
                    <TopText>{category}</TopText>
                </TaskCategory>
                <Description>
                    {description || "Tarefa sem descrição adicionada"} {/* Texto padrão */}
                </Description>
            </TitleContainer>
        </Container>
    );
}
