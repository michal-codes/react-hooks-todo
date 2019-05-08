import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form className="addTodoFormStyle" onSubmit={e => handleSubmit(e)}>
        <input
          className="addTodoInputStyle"
          type="text"
          placeholder="Write new TODO..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <input className="addTodoBtnStyle" type="submit" value="ADD TODO" />
      </form>
    </div>
  );
};

export default AddTodo;
