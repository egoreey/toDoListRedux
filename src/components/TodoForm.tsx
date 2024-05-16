import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions.ts';

const TodoForm: React.FC = () => {
    const [text, setText] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить задание"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;
