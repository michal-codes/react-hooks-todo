import React from 'react';

const TodoItem = ({ todo, index, id, removeTodo, completeTodo }) => {
  const removeBtnStyle = {
    padding: '20px',
    background: '#e92936',
    color: 'white',
    border: 'none',
    outline: 'none',
    flex: '1'
  };
  const completeBtnStyle = {
    padding: '20px',
    background: '#4e641c',
    color: 'white',
    border: 'none',
    outline: 'none',
    marginRight: '1rem',
    flex: '1'
  };
  return (
    <React.Fragment>
      <div className="todo-item">
        <p
          style={{
            textDecoration: todo.isCompleted ? 'line-through' : 'none',
            paddingLeft: '20px',
            flex: '8'
          }}
        >
          {todo.text}
        </p>
        <div style={{ flex: '2', display: 'flex' }}>
          <button
            onClick={() => completeTodo(index, id)}
            style={completeBtnStyle}
          >
            DONE
          </button>
          <button onClick={() => removeTodo(id)} style={removeBtnStyle}>
            DEL
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
