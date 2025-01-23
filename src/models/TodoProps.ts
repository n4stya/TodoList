import { Todo as TodoModel } from './todo.model';

export interface TodoProps {
    todo: TodoModel;
    onDelete: (id: string) => void;
    onEdit: (id: string, title: string) => void;
    onToggleCompletion: (id: string) => void;
}
