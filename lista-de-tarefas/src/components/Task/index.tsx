import {Container, TaskText, TaskDone, TaskDelete} from './styles'
import {Feather} from '@expo/vector-icons'

export function Task(){
    return(
        <Container>
            <TaskDone>
                <Feather name="circle" size={24} color="#33363F"/>
            </TaskDone>
            <TaskText>Tarefa teste</TaskText>
            <TaskDelete>
                <Feather name="trash" size={24} color="white"/>
            </TaskDelete>
        </Container>
    );
}