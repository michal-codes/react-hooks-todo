import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import TodoItem from './components/TodoItem';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', done: false },
    { text: 'Do it well', done: false },
    { text: 'Visit grandma', done: false },
    { text: 'Stay cool', done: true }
  ]);

  // CREATE operation
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // UPDATE operation
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };
  // DELETE operation
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
              {/* {todos.map((todo, index) => (
                <Todo
                  todo={todo}
                  key={index}
                  index={index}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                />
              ))} */}
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
