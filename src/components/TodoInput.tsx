import React, { useState } from 'react';
import {
    Container,
    InputContainer,
    LinkContainer,
    StyledTextField,
    StyledTypography,
    CircleIcon,
    AddIcon,
    StyledLink,
    IconButtonStyled,
    ArrowIcon
} from './styles/TodoInputStyles';
import { TodoInputProps } from '../models/TodoInputProps';

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const handleAddClick = () => {
        if (newTodoTitle.trim()) {
            onAdd(newTodoTitle);
            setNewTodoTitle('');
        }
    };

    return (
        <Container>
            <StyledTypography variant='h4'>TODO List</StyledTypography>
            <InputContainer>
                <StyledTextField
                    value={newTodoTitle}
                    onChange={e => setNewTodoTitle(e.target.value)}
                    placeholder='add new task...'
                    variant='outlined'
                />
                <IconButtonStyled onClick={handleAddClick}>
                    <CircleIcon />
                    <AddIcon />
                </IconButtonStyled>
            </InputContainer>
            <LinkContainer>
                <StyledLink to='/tasks'>
                    <ArrowIcon />
                    tasks
                </StyledLink>
            </LinkContainer>
        </Container>
    );
};

export default TodoInput;
