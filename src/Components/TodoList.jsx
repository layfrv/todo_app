import React from 'react';
import '../App.scss';
import { Reorder, AnimatePresence } from 'framer-motion';
import { TodoItem } from './TodoItem/TodoItem';

export const TodoList = ({ todos, setTodos, changeTodo, deleteTodo }) => {
  return (
    <Reorder.Group axys='y' values={todos} onReorder={setTodos} className='todoList'>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} deleteTodo={deleteTodo} />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};
