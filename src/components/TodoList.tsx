import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { TodoListProps } from '../models/TodoListProps';
import {
    FilterButton,
    StyledLink,
    StyledTypography,
    Container,
    LinkContainer,
    ButtonContainer,
    ArrowIcon
} from './styles/TodoListStyles';

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
    const [filter, setFilter] = useState('all');

    const handleTodos = (action: 'load' | 'save') => {
        if (action === 'load') {
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) setTodos(JSON.parse(storedTodos));
        } else {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    };

    useEffect(() => {
        handleTodos('load');
    }, []);

    useEffect(() => {
        handleTodos('save');
    }, [todos]);

    const deleteTodo = (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const editTodo = (id: string, title: string) => {
        setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, title } : todo)));
    };

    const toggleCompletion = (id: string) => {
        setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <Container>
            <StyledTypography variant='h5'>Total tasks: {todos.length}</StyledTypography>
            <ButtonContainer>
                <FilterButton onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
                    All
                </FilterButton>
                <FilterButton onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>
                    Active
                </FilterButton>
                <FilterButton onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
                    Completed
                </FilterButton>
            </ButtonContainer>
            <div>
                {filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                        onToggleCompletion={toggleCompletion}
                    />
                ))}
            </div>
            <LinkContainer>
                <StyledLink to='/'>
                    <ArrowIcon />
                    new task
                </StyledLink>
            </LinkContainer>
        </Container>
    );
};

export default TodoList;
