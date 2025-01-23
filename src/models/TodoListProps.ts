import { Todo as TodoModel } from '../models/todo.model';

export interface TodoListProps {
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
