import React, { useEffect } from 'react';
import './createTaskForm.modules.scss';

export const CreateTaskForm = ({ setTodos }) => {
  const [title, setTitle] = React.useState('');

  const addTodo = (title) => {
    if (title.length !== 0)
      setTodos((prev) => [
        {
          id: Math.random(),
          title,
          isCompleted: false,
        },
        ...prev,
      ]);
    setTitle('');
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="task-form">
      <label className="form-label">
        <input
          className="input-text"
          value={title}
          onKeyDown={onKeyDownHandler}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="name"
          placeholder="Create your task"
          autoComplete="off"
        />
        <button onClick={() => addTodo(title)} className="submit-btn" type="submit">
          Add
        </button>
      </label>
    </div>
  );
};
