import React, { useState } from 'react';
import {
    Container,
    TaskContainer,
    StyledBox,
    StyledCheckbox,
    StyledTextField,
    CheckIcon,
    CancelIcon,
    EditIcon,
    DeleteIcon
} from './styles/TodoStyles';
import { TodoProps } from '../models/TodoProps';

const Todo: React.FC<TodoProps> = ({ todo, onDelete, onEdit, onToggleCompletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleSave = () => {
        onEdit(todo.id, newTitle);
        setIsEditing(false);
    };

    return (
        <Container>
            {isEditing ? (
                <TaskContainer>
                    <StyledTextField
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                        variant='outlined'
                        size='small'
                    />
                    <StyledBox>
                        <CheckIcon onClick={handleSave} />
                        <CancelIcon onClick={() => setIsEditing(false)} />
                    </StyledBox>
                </TaskContainer>
            ) : (
                <TaskContainer>
                    <StyledBox>
                        <StyledCheckbox checked={todo.completed} onChange={() => onToggleCompletion(todo.id)} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
                    </StyledBox>
                    <StyledBox>
                        <EditIcon onClick={() => setIsEditing(true)} />
                        <DeleteIcon onClick={() => onDelete(todo.id)} />
                    </StyledBox>
                </TaskContainer>
            )}
        </Container>
    );
};

export default Todo;
