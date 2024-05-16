import TodoForm from './components/TodoForm.tsx';
import TodoList from './components/TodoList.tsx';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1>Todo List</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default App;
