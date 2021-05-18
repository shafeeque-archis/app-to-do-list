import './App.css';

import TodoList from './TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <div className="TodoWrapper">
        <h1>To Do List </h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
