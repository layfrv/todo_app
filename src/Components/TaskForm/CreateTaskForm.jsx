import React, { useEffect } from 'react';
import './createTaskForm.modules.scss';

export const CreateTaskForm = ({ todos, setTodos }) => {
  const lastOrder = todos.length !== 0 ? todos[todos.length - 1].order + 1 : 0;
  const [title, setTitle] = React.useState('');

  const [order, setOrder] = React.useState(lastOrder);

  const addTodo = (title) => {
    if (title.length !== 0)
      setTodos((prev) => [
        ...prev,
        {
          id: Math.trunc(Math.random() * 1000),
          title,
          isCompleted: false,
          order,
        },
      ]);
    setTitle('');
    setOrder((prev) => prev + 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className='task-form'>
      <label className='form-label'>
        <input
          className='input-text'
          value={title}
          onKeyDown={onKeyDownHandler}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          name='name'
          placeholder='Create your task'
          autoComplete='off'
        />
        <button onClick={() => addTodo(title)} className='submit-btn' type='submit'>
          <p>Add</p>
        </button>
      </label>
    </div>
  );
};
