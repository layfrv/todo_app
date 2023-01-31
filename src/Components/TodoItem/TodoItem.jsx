import React from 'react';
import { Check } from '../Check/Check';
import { TiDelete } from 'react-icons/ti';
import './todoItem.modules.scss';
import cn from 'classnames';

export const TodoItem = ({ todo, changeTodo, deleteTodo }) => {
  const onClickHandler = () => {
    changeTodo(todo.id);
  };

  return (
    <div className="todoItem">
      <button onClick={onClickHandler} className="flex">
        <div>
          <Check isCompleted={todo.isCompleted} />
        </div>
        <p
          className={cn('text-left overflow-auto pt-0.5', {
            'line-through text-zinc-600': todo.isCompleted,
          })}>
          {todo.title}
        </p>
      </button>
      <button onClick={() => deleteTodo(todo)}>
        <TiDelete size={30} fill="#7c3aed" className="ml-5" />
      </button>
    </div>
  );
};
