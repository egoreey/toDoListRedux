import { createStore } from 'redux';
import { todoApp } from './reducers.js';

export const store = createStore(todoApp);