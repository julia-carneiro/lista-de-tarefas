import {AddTask, Container, Text} from './styles'
import {Feather} from '@expo/vector-icons'

export function CreateTask(){
    return(
        <Container>
            <Text>Criar Tarefa</Text>
            <AddTask>
                <Feather name="plus" size={24} color="#33363F"/>
            </AddTask>
        </Container>
    );
}