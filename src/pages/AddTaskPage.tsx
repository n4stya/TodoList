import React from 'react';
import TodoInput from '../components/TodoInput';

interface AddTaskPageProps {
    onAdd: (title: string) => void;
}

const AddTaskPage: React.FC<AddTaskPageProps> = ({ onAdd }) => {
    return (
        <div>
            <TodoInput onAdd={onAdd} />
        </div>
    );
};

export default AddTaskPage;
