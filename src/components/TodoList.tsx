// TodoList.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../actions.ts';

interface RootState {
    todos: { text: string }[];
}

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const handleRemove = (index: number) => {
        dispatch(removeTodo(index));
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo.text}
                    <button onClick={() => handleRemove(index)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
