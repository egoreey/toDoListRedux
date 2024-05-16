export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


export function addTodo(text: string) {
    return { type: ADD_TODO, text };
}
export function removeTodo(index: number) {
    return { type: REMOVE_TODO, index };
}