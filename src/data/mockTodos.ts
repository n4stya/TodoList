import { Todo as TodoModel } from '../models/todo.model';

const mockTodos: TodoModel[] = [
    { id: '51c1c4f1-03bf-48bf-9705-9dc97ab61a76', title: 'todo', completed: false },
    {
        id: '3b720eaf-163a-41c8-bc5e-b47f2370cd0c',
        title: 'list',
        completed: false
    },
    { id: '62aabce1-8f84-4684-90b9-2b2310cf726a', title: 'tasks', completed: true }
];

export default mockTodos;
