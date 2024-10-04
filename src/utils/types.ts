

export type TasksProps = {
    task: string;
    description: string;
    category: string;
    check: boolean; 
}

export type RootStackParamList = {
    Home: undefined;
    Details: TasksProps;
}