import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import axios from 'axios';
import uuid from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:4000/todos');
      setTodos(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const countIsCompleted = todos.filter(todo => {
      return todo.isCompleted === true;
    }).length;
    document.title =
      countIsCompleted + ' out of ' + todos.length + " todo's completed";
  });

  // CREATE operation
  const addTodo = text => {
    const newTodo = {
      id: uuid.v4(),
      text,
      isCompleted: false
    };
    axios
      .post('http://localhost:4000/todos', newTodo)
      .then(res => setTodos([...todos, res.data]));
  };

  // UPDATE operation
  const completeTodo = (index, id) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    axios
      .put(`http://localhost:4000/todos/${id}`, newTodos[index])
      .then(res => setTodos(newTodos));
  };

  // DELETE operation
  const removeTodo = id => {
    axios.delete(`http://localhost:4000/todos/${id}`).then(res =>
      setTodos([
        ...todos.filter(todo => {
          return todo.id !== id;
        })
      ])
    );
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
