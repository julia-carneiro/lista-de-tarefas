// src/components/Task.tsx
import React from 'react';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import { Feather } from '@expo/vector-icons';

interface TaskProps {
    task: string;
    description: string;
    category: string;
}

export function Task({ task, description, category }: TaskProps) {
    return (
        <Container>
            <TaskDone>
                <Feather name="circle" size={24} color="#33363F" />
            </TaskDone>
            <TaskText>{task}</TaskText>
            <TaskDelete>
                <Feather name="trash" size={24} color="white" />
            </TaskDelete>
        </Container>
    );
}
