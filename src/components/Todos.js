import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, completeTodo, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={index}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
