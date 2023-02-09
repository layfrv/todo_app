import React from 'react';
import { Check } from '../Check/Check';
import { TiDelete } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { Reorder } from 'framer-motion';
import './todoItem.modules.scss';
import cn from 'classnames';

const variants = {
  initial: {
    opacity: 0,
    height: 'auto',
  },
  animate: {
    opacity: 1,
    height: 'auto',
  },
  exit: {
    opacity: 0,
    height: 'auto',
  },
};

export const TodoItem = ({ todo, changeTodo, deleteTodo }) => {
  const onClickHandler = () => {
    changeTodo(todo.id);
  };

  const [title, setTitle] = React.useState(todo.title);

  const [isEdit, setEdit] = React.useState(false);

  const editTodo = () => {
    setEdit((prev) => !prev);
  };

  const saveTodo = () => {
    todo.title = title;
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTitle(e.target.value);
      saveTodo(title);
      const items = JSON.parse(localStorage.getItem('todos'));
      const itemId = items.findIndex((el) => el.id === todo.id);
      items[itemId].title = title;
      localStorage.setItem('todos', JSON.stringify(items));
      setEdit(false);
    }
  };

  return (
    <Reorder.Item
      value={todo}
      whileDrag={{
        scale: 1.03,
      }}
      {...variants}
      className='todo-item'>
      <button className='todo-item-btn'>
        <div onClick={onClickHandler}>
          <Check isCompleted={todo.isCompleted} />
        </div>

        {isEdit ? (
          <input
            className='edit-input'
            type='text'
            value={title}
            onKeyDown={onKeyDownHandler}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete='off'></input>
        ) : (
          <p
            className={cn('todo-item-btn_p', {
              'todo-item-btn_p-completed': todo.isCompleted,
            })}>
            {todo.title}
          </p>
        )}
      </button>
      <div className='todo-item-button-items'>
        <button className='edit-icon' onClick={() => editTodo()}>
          <AiOutlineEdit className='edit-icon-svg' />
        </button>

        <button className='delete-icon' onClick={() => deleteTodo(todo)}>
          <TiDelete className='delete-icon-svg' />
        </button>
      </div>
    </Reorder.Item>
  );
};
