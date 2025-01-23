import React from 'react';
import TodoList from '../components/TodoList';
import { Todo as TodoModel } from '../models/todo.model';

interface TasksPageProps {
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TasksPage: React.FC<TasksPageProps> = ({ todos, setTodos }) => {
    return (
        <div>
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default TasksPage;
