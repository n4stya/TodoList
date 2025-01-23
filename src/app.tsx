import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTaskPage from './pages/AddTaskPage';
import TasksPage from './pages/TasksPage';
import { v4 as uuidv4 } from 'uuid';
import { Todo as TodoModel } from './models/todo.model';
import mockTodos from './data/mockTodos';

const App: React.FC = () => {
    const [todos, setTodos] = useState<TodoModel[]>(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : mockTodos;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title: string) => {
        const newTodo = { id: uuidv4(), title, completed: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <Router>
            <Routes>
                <Route path='/' element={<AddTaskPage onAdd={addTodo} />} />
                <Route path='/tasks' element={<TasksPage todos={todos} setTodos={setTodos} />} />
            </Routes>
        </Router>
    );
};

export default App;
