import React, { useState } from 'react';
import './App.css';

// Consumers of state
import TodoForm from './components/todoForm';
import Todo from './components/toDo';

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  

  return (
    <div className="App">
      <div className="todo-list">
      <h1>React hooks CRUD ToDo Example</h1>
      <h3>Followed Tutorial from Scotch.io + structure cleanup</h3>
      <p><a href="https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components">Build a React To-Do App with React Hooks (No Class Components)</a></p>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
