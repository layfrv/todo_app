import React, { useState, useRef, useEffect } from 'react';
import { Check } from '../Check/Check';
import { TiDelete } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { Reorder } from 'framer-motion';
import './todoItem.scss';
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
    saveTodo(title);
  };

  const saveTodo = () => {
    setTitle(title);
    todo.title = title;
    const items = JSON.parse(localStorage.getItem('todos'));
    const itemId = items.findIndex((el) => el.id === todo.id);
    items[itemId].title = title;
    localStorage.setItem('todos', JSON.stringify(items));
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveTodo(title);
      setEdit(false);
    }
  };

  const onBlur = () => {
    setEdit((prev) => !prev);
    saveTodo(title);
  };

  return (
    <Reorder.Item
      value={todo}
      whileDrag={{
        scale: 1.03,
      }}
      {...variants}
      className="todo-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="todo-item-check-block">
        <div onClick={onClickHandler}>
          <Check isCompleted={todo.isCompleted} />
        </div>

        {isEdit ? (
          <Input
            title={title}
            setTitle={setTitle}
            onKeyDownHandler={onKeyDownHandler}
            onBlur={onBlur}
          />
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
          <AiOutlineEdit className="edit-icon-svg" />
        </button>

        <button
          className={`${isHovered ? 'delete-icon-hovered' : 'delete-icon'}`}
          onClick={() => deleteTodo(todo)}>
          <TiDelete className="delete-icon-svg" />
        </button>
      </div>
    </Reorder.Item>
  );
};
