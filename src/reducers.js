import { ADD_TODO, REMOVE_TODO } from './actions.ts';

const initialState = {
    todos: []
};

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.text }]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.index)
            };
        default:
            return state;
    }
}
