import React, { useState } from 'react';
import { Check } from '../Check/Check';
import { TiDelete } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { Reorder } from 'framer-motion';
import './todoItem.modules.scss';
import cn from 'classnames';
import { Input } from './Input';

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

  const [isHovered, setIsHovered] = useState(false);
  const [title, setTitle] = React.useState(todo.title);

  const [isEdit, setEdit] = React.useState(false);

  const editTodo = () => {
    setEdit((prev) => !prev);
  };

  const saveTodo = (title) => {
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
      className='todo-item'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className='todo-item-check-block'>
        <div onClick={onClickHandler}>
          <Check isCompleted={todo.isCompleted} />
        </div>

        {isEdit ? (
          <Input title={title} setTitle={setTitle} onKeyDownHandler={onKeyDownHandler} />
        ) : (
          <p
            onDoubleClick={() => editTodo()}
            className={cn('todo-item-block-p', {
              'todo-item-block-p-completed': todo.isCompleted,
            })}>
            {todo.title}
          </p>
        )}
      </div>

      <div className={'button-items'}>
        <button
          className={`${isHovered ? 'edit-icon-hovered' : 'edit-icon'}`}
          onClick={() => editTodo()}>
          <AiOutlineEdit className='edit-icon-svg' />
        </button>

        <button
          className={`${isHovered ? 'delete-icon-hovered' : 'delete-icon'}`}
          onClick={() => deleteTodo(todo)}>
          <TiDelete className='delete-icon-svg' />
        </button>
      </div>
    </Reorder.Item>
  );
};
